'use strict';
function readName(query) { const params = new URLSearchParams(query); return { name: params.get('name') || '', lastname: params.get('lastname') || '' }; }
if (typeof document !== 'undefined') {
  const { name, lastname } = readName(location.search);
  // textContent renders untrusted query data as text, never executable HTML.
  document.querySelector('#result').textContent = name || lastname ? `Welcome, ${name} ${lastname}!` : 'No name was submitted. Please use the form.';
}
if (typeof module !== 'undefined') module.exports = { readName };
