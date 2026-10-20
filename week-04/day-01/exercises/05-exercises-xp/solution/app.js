async function getJSON(url) {
  const response = await fetch(url, {signal: AbortSignal.timeout(15000)});
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${url}`);
  return response.json();
}

async function main() {
  const key = process.env.GIPHY_API_KEY;
  if (!key) throw new Error('Set GIPHY_API_KEY to your own API key.');
  for (const [q,limit,offset] of [['hilarious',25,0],['sun',10,2]]) {
    const url=new URL('https://api.giphy.com/v1/gifs/search');
    url.search=new URLSearchParams({q,limit,offset,rating:'g',api_key:key});
    console.log(await getJSON(url));
  }
  console.log((await getJSON('https://www.swapi.tech/api/starships/9/')).result);
  console.log('calling');
  const result=await new Promise(resolve=>setTimeout(()=>resolve('resolved'),2000));
  console.log(result);
}
main().catch(error=>{console.error(error.message);process.exitCode=1;});
