async function getJSON(url) {
  const response = await fetch(url, {signal: AbortSignal.timeout(15000)});
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${url}`);
  return response.json();
}

document.querySelector('form').onsubmit=async event=>{
  event.preventDefault(); const data=new FormData(event.target), output=document.querySelector('pre'); output.textContent='Loading both cities…';
  try{
    const results=await Promise.all([1,2].map(async i=>{
      const query=new URLSearchParams({lat:data.get('lat'+i),lng:data.get('lng'+i),formatted:0});
      const result=await getJSON('https://api.sunrise-sunset.org/json?'+query);
      if(result.status!=='OK')throw new Error(result.status);
      return `City ${i}: ${result.results.sunrise} (UTC)`;
    }));
    output.textContent=results.join('\n');
  }catch(error){output.textContent='Could not load both cities: '+error.message;}
};
