async function getJSON(url) {
  const response = await fetch(url, {signal: AbortSignal.timeout(15000)});
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${url}`);
  return response.json();
}

async function getData(){
  try {
    const urls=['users','posts','albums'].map(x=>`https://jsonplaceholder.typicode.com/${x}`);
    const [users,posts,albums]=await Promise.all(urls.map(async url=>await getJSON(url)));
    console.log({users,posts,albums});
  }catch(error){console.log('ooooooops'); console.error(error.message);}
}
getData();
