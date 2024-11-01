const apikey="dbdf15be72cfa21f52a05783a46d5f9e";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city=document.querySelector(".city");
const temp=document.querySelector(".temp");
const humid=document.querySelector(".humidity");
const windspeed=document.querySelector(".wind");

const cityName=document.querySelector("input");
const btn=document.querySelector(".search button");
const weatherImage=document.querySelector(".weatherIcon");

async function checkweather(cityname){
   const response= await fetch(apiurl+cityname+`&appid=${apikey}`);
   var data= await response.json();
   
   city.innerHTML=data.name;
   temp.innerHTML=Math.round(data.main.temp)+` °C`;
   humid.innerHTML=data.main.humidity+` %`;
   windspeed.innerHTML=data.wind.speed+` km/hr`;
//    console.log(data);

   if(data.weather[0].main=="Clouds")
     weatherImage.src="images/clouds.png";

   else if(data.weather[0].main=="Rain")
    weatherImage.src="images/rain.png";

   else if(data.weather[0].main=="Mist")
    data.weather[0].main=="images/mist.png";

   else if(data.weather[0].main=="Snow")
    data.weather[0].main=="images/snow.png";
   
   else if(data.weather[0].main=="Drizzle")
    data.weather[0].main=="images/drizzle.png";

   else if(data.weather[0].main=="Clear")
    data.weather[0].main=="images/clear.png";

}

btn.addEventListener("click",()=>{
    checkweather(cityName.value);
})