'use strict';
const cache = new Map();
async function getPokemon(id, fetcher = fetch) {
  if (cache.has(id)) return cache.get(id);
  const response = await fetcher(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!response.ok) throw new Error(`Pokémon request failed (${response.status})`);
  const data = await response.json(); cache.set(id, data); return data;
}
const pokemonView = data => ({ id: data.id, name: data.name, height: `${data.height / 10} m`, weight: `${data.weight / 10} kg`, type: data.types.map(item => item.type.name).join(', '), image: data.sprites.other?.['official-artwork']?.front_default || data.sprites.front_default });
if (typeof document !== 'undefined') {
  const $ = selector => document.querySelector(selector);
  let current = null;
  // Browse the contiguous original 151 IDs; newer form IDs are not contiguous.
  const limit = 151;
  async function load(id) {
    for (const button of document.querySelectorAll('button')) button.disabled = true;
    $('#status').textContent = 'Loading Pokémon…'; $('#pokemon').hidden = true;
    try {
      const view = pokemonView(await getPokemon(id)); current = view.id;
      $('#name').textContent = view.name; $('#number').textContent = `NO. ${String(view.id).padStart(3, '0')}`;
      $('#image').src = view.image || ''; $('#image').alt = `${view.name} artwork`; $('#image').hidden = !view.image;
      $('#details').replaceChildren(...[['Height', view.height], ['Weight', view.weight], ['Type', view.type]].flatMap(([label, value]) => { const dt = document.createElement('dt'), dd = document.createElement('dd'); dt.textContent = label; dd.textContent = value; return [dt, dd]; }));
      $('#pokemon').hidden = false; $('#status').textContent = 'Pokémon found.';
    } catch (error) { $('#status').textContent = `Oh no! That Pokémon isn't available… ${error.message}`; }
    finally { $('#random').disabled = false; $('#previous').disabled = current === null || current <= 1; $('#next').disabled = current === null || current >= limit; }
  }
  $('#random').onclick = () => load(Math.floor(Math.random() * limit) + 1);
  $('#previous').onclick = async () => { if (current > 1) await load(current - 1); };
  $('#next').onclick = async () => { if (current < limit) await load(current + 1); };
}
if (typeof module !== 'undefined') module.exports = { getPokemon, pokemonView, cache };
