async function getJSON(url) {
  const response = await fetch(url, {signal: AbortSignal.timeout(15000)});
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${url}`);
  return response.json();
}

async function main(){
  const category=process.argv[2]||'dev';
  console.log((await getJSON('https://api.chucknorris.io/jokes/random?category='+encodeURIComponent(category))).value);
}
main().catch(error=>{console.error(error.message);process.exitCode=1;});
