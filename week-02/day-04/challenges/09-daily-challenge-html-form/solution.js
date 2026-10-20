'use strict';
const serializeName = (name, lastname) => JSON.stringify({ name, lastname });
if (typeof document !== 'undefined') document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const fields = new FormData(event.currentTarget);
  document.querySelector('#result').textContent = serializeName(fields.get('name'), fields.get('lastname'));
});
if (typeof module !== 'undefined') module.exports = { serializeName };
