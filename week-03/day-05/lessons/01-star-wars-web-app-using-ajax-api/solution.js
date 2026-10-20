'use strict';
async function getJSON(url, fetcher = fetch) {
  const response = await fetcher(url);
  if (!response.ok) throw new Error(`Request failed (${response.status})`);
  return response.json();
}
async function getCharacter(id, fetcher = fetch) {
  const data = await getJSON(`https://www.swapi.tech/api/people/${id}`, fetcher);
  const properties = data.result?.properties;
  if (!properties) throw new Error('Character data is unavailable');
  const homeworld = await getJSON(properties.homeworld, fetcher);
  return { ...properties, homeworld: homeworld.result?.properties?.name || 'Unknown' };
}
if (typeof document !== 'undefined') {
  const button = document.querySelector('#find'), status = document.querySelector('#status'), panel = document.querySelector('#character');
  let people = null;
  button.onclick = async () => {
    button.disabled = true; status.textContent = 'Loading a character…'; panel.hidden = true;
    try {
      // Discover existing IDs rather than assuming an old contiguous range.
      if (!people) { const page = await getJSON('https://www.swapi.tech/api/people?page=1&limit=100'); people = page.results; if (!people?.length) throw new Error('No characters found'); }
      const id = people[Math.floor(Math.random() * people.length)].uid;
      const character = await getCharacter(id);
      document.querySelector('#name').textContent = character.name;
      const fields = [['Height', `${character.height} cm`], ['Gender', character.gender], ['Birth year', character.birth_year], ['Home world', character.homeworld]];
      document.querySelector('#details').replaceChildren(...fields.flatMap(([label, value]) => { const dt = document.createElement('dt'), dd = document.createElement('dd'); dt.textContent = label; dd.textContent = value; return [dt, dd]; }));
      panel.hidden = false; status.textContent = 'Character found.';
    } catch (error) { status.textContent = `Oh no! That person is not available. ${error.message}`; }
    finally { button.disabled = false; }
  };
}
if (typeof module !== 'undefined') module.exports = { getJSON, getCharacter };
