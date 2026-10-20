'use strict';
function validateAmount(value) { const number = Number(value); if (value === '' || !Number.isFinite(number) || number < 0) throw new Error('Enter a finite, non-negative amount'); return number; }
async function exchangeRequest(key, endpoint, fetcher = fetch) {
  if (!key.trim()) throw new Error('An API key is required');
  const response = await fetcher(`https://v6.exchangerate-api.com/v6/${encodeURIComponent(key.trim())}/${endpoint}`);
  if (!response.ok) throw new Error(`Exchange service returned HTTP ${response.status}`);
  const data = await response.json();
  if (data.result !== 'success') throw new Error(`Exchange service: ${data['error-type'] || 'unknown error'}`);
  return data;
}
async function supportedCurrencies(key, fetcher = fetch) { const data = await exchangeRequest(key, 'codes', fetcher); return data.supported_codes; }
async function convertCurrency(key, from, to, value, fetcher = fetch) {
  const amount = validateAmount(value);
  if (!/^[A-Z]{3}$/.test(from) || !/^[A-Z]{3}$/.test(to)) throw new Error('Choose two supported currencies');
  return exchangeRequest(key, `pair/${from}/${to}/${amount}`, fetcher);
}
if (typeof document !== 'undefined') {
  const $ = selector => document.querySelector(selector);
  let apiKey = '', ready = false;
  function busy(value) { $('#connect').disabled = value; for (const id of ['#from', '#to', '#switch', '#convert']) $(id).disabled = value || !ready; }
  $('#connect').onclick = async () => {
    ready = false; busy(true); $('#status').textContent = 'Loading supported currencies…'; $('#result').textContent = ''; $('#updated').textContent = '';
    try {
      apiKey = $('#key').value.trim(); const codes = await supportedCurrencies(apiKey);
      if (!Array.isArray(codes) || !codes.length) throw new Error('No currencies were returned');
      for (const id of ['#from', '#to']) $(id).replaceChildren(...codes.map(([code, name]) => { const option = document.createElement('option'); option.value = code; option.textContent = `${code} — ${name}`; return option; }));
      $('#from').value = codes.some(([code]) => code === 'USD') ? 'USD' : codes[0][0];
      $('#to').value = codes.some(([code]) => code === 'MAD') ? 'MAD' : codes[0][0];
      ready = true; $('#status').textContent = `${codes.length} supported currencies loaded.`;
    } catch (error) { $('#status').textContent = error.message; }
    finally { busy(false); }
  };
  async function convert() {
    if (!ready) return;
    busy(true); $('#status').textContent = 'Fetching the pair conversion…'; $('#result').textContent = ''; $('#updated').textContent = '';
    try {
      const from = $('#from').value, to = $('#to').value, amount = validateAmount($('#amount').value);
      const result = await convertCurrency(apiKey, from, to, amount);
      const converted = result.conversion_result ?? amount * result.conversion_rate;
      $('#result').textContent = `${amount} ${from} = ${Number(converted).toLocaleString(undefined, { maximumFractionDigits: 4 })} ${to}`;
      $('#status').textContent = `Rate: 1 ${from} = ${result.conversion_rate} ${to}`;
      $('#updated').textContent = result.time_last_update_utc ? `API update: ${result.time_last_update_utc}` : '';
    } catch (error) { $('#status').textContent = error.message; }
    finally { busy(false); }
  }
  $('#converter').onsubmit = event => { event.preventDefault(); convert(); };
  $('#switch').onclick = () => { const from = $('#from').value; $('#from').value = $('#to').value; $('#to').value = from; convert(); };
}
if (typeof module !== 'undefined') module.exports = { validateAmount, exchangeRequest, supportedCurrencies, convertCurrency };
