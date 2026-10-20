'use strict';
class QuoteCollection {
  constructor(quotes) { this.quotes = quotes.map((quote, id) => ({ ...quote, id, likes: 0 })); this.current = null; }
  add(quote, author) {
    if (!quote.trim() || !author.trim()) throw new Error('Quote and author are required');
    const entry = { id: this.quotes.length, quote: quote.trim(), author: author.trim(), likes: 0 };
    this.quotes.push(entry); return entry;
  }
  filter(author) { return this.quotes.filter(quote => quote.author.toLowerCase().includes(author.trim().toLowerCase())); }
  random(pool = this.quotes, rng = Math.random) {
    const alternatives = pool.filter(quote => quote.id !== this.current?.id);
    const choices = alternatives.length ? alternatives : pool;
    this.current = choices.length ? choices[Math.floor(rng() * choices.length)] : null;
    return this.current;
  }
  stats(quote = this.current) {
    return { characters: [...quote.quote].length, noSpaces: [...quote.quote.replace(/\s/gu, '')].length, words: quote.quote.trim().split(/\s+/u).filter(Boolean).length };
  }
}
const collection = new QuoteCollection([
  { quote: 'Well done is better than well said.', author: 'Benjamin Franklin' },
  { quote: 'Lost time is never found again.', author: 'Benjamin Franklin' },
  { quote: 'Nothing will come of nothing.', author: 'William Shakespeare' },
  { quote: 'Brevity is the soul of wit.', author: 'William Shakespeare' }
]);
if (typeof document !== 'undefined') {
  const $ = selector => document.querySelector(selector);
  let pool = collection.quotes, position = 0;
  function render() {
    const current = collection.current;
    $('#quote').textContent = current?.quote || 'No quotes match this author.';
    $('#author').textContent = current ? `— ${current.author}` : '';
    $('#likes').textContent = current ? `${current.likes} likes` : '';
    position = pool.findIndex(item => item.id === current?.id);
    $('#position').textContent = pool.length ? `${position + 1} of ${pool.length}` : '0 results';
    ['#like', '#characters', '#no-spaces', '#words', '#previous', '#next', '#generate'].forEach(id => { $(id).disabled = !current; });
  }
  $('#generate').onclick = () => { collection.random(pool); $('#status').textContent = ''; render(); };
  $('#like').onclick = () => { collection.current.likes++; render(); };
  for (const [id, key] of [['#characters', 'characters'], ['#no-spaces', 'noSpaces'], ['#words', 'words']]) $(id).onclick = () => { $('#status').textContent = `${collection.stats()[key]} ${key === 'words' ? 'words' : 'characters'}`; };
  $('#filter-form').onsubmit = event => { event.preventDefault(); pool = collection.filter($('#filter').value); collection.current = pool[0] || null; render(); };
  $('#previous').onclick = () => { position = (position - 1 + pool.length) % pool.length; collection.current = pool[position]; render(); };
  $('#next').onclick = () => { position = (position + 1) % pool.length; collection.current = pool[position]; render(); };
  $('#add-form').onsubmit = event => {
    event.preventDefault();
    try { const added = collection.add($('#new-quote').value, $('#new-author').value); $('#filter').value = ''; pool = collection.quotes; collection.current = added; event.currentTarget.reset(); render(); $('#status').textContent = 'Quote added.'; }
    catch (error) { $('#status').textContent = error.message; }
  };
  collection.random(); render();
}
if (typeof module !== 'undefined') module.exports = { QuoteCollection };
