const ENDPOINT='https://api.giphy.com/v1/gifs/search', ONE=false;
async function getJSON(url) {
  const response = await fetch(url, {signal: AbortSignal.timeout(15000)});
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${url}`);
  return response.json();
}

const form=document.querySelector('form'), gallery=document.querySelector('main'), status=document.querySelector('#status');
document.querySelector('#clear').onclick=()=>gallery.replaceChildren();
form.onsubmit=async event=>{
  event.preventDefault(); status.textContent='Loading…';
  try {
    const values=new FormData(form), url=new URL(ENDPOINT);
    url.search=new URLSearchParams({api_key:values.get('key'),rating:'g',q:values.get('category'),tag:values.get('category'),limit:20});
    const result=await getJSON(url);
    let gifs=Array.isArray(result.data)?result.data:[result.data];
    if (ONE && gifs.length) gifs=[gifs[Math.floor(Math.random()*gifs.length)]];
    for(const gif of gifs){
      if(!gif?.images?.original?.url) continue;
      const figure=document.createElement('figure'), image=document.createElement('img'), button=document.createElement('button');
      image.src=gif.images.original.url; image.alt=gif.title||String(values.get('category')); image.width=240;
      button.textContent='Delete'; button.onclick=()=>figure.remove(); figure.append(image,button);gallery.append(figure);
    }
    status.textContent=gifs.length?'Ready.':'No GIFs found.';
  } catch(error){status.textContent=error.message;}
};
