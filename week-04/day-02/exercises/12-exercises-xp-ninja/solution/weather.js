const axios=require('axios'),chalk=require('chalk');
module.exports=async city=>{
  const key=process.env.OPENWEATHER_API_KEY;if(!key)throw new Error('Set OPENWEATHER_API_KEY');
  const {data}=await axios.get('https://api.openweathermap.org/data/2.5/weather',{params:{q:city,appid:key,units:'metric'},timeout:15000});
  console.log(chalk.cyan(`${data.name}: ${data.main.temp} °C — ${data.weather[0].description}`));
};
