//variaveis
const apiKey = "b75a8ddde51ce9602afa6e03fb52780b";

const divcidade = document.querySelector("#divcidade2");
const latin = document.querySelector("#latin2");
const seachbtn = document.querySelector("#pesquisa");
const seachbtnlat = document.querySelector("#pesquisalat");

// const apiUnsplash = "https://source.unsplash.com/1600x900/?";
// const apiUnsplash = "img/sol.jpg";

const cidadeElement = document.querySelector("#city");
const latElement = document.querySelector("#latinput");
const longElement = document.querySelector("#longinput");


const tempoElement = document.querySelector("#temperatura");
const sensacaoElement = document.querySelector("#sensacao");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#pais");
const umidityElement = document.querySelector("#umidade span");
const windElement = document.querySelector("#vento span");

const weatherContainer = document.querySelector("#weather")
const errotext = document.querySelector("#erro")

const latitude = document.querySelector("#latitude");
const longetude = document.querySelector("#longetude");

//Eventos JS
seachbtn.addEventListener("click", (e) => {
  // e.preventDefault();
  const cidadeinput = cidade.value
  console.log(cidadeinput);
  showWeatherData(cidadeinput);
});

cidade.addEventListener("keyup", (e)=>{
  if(e.code==="Enter"){
    const cidadeinput = e.target.value;
    showWeatherData(cidadeinput);
  }
})

seachbtnlat.addEventListener("click", (e)=>{
    const latinput = latElement.value;
    const longinput = longElement.value;
    showWeatherDatalat(latinput,longinput);
  
})

//Altera o HTML de acordo com os dados recebidos da API
const showWeatherData = async (cidadeinput) =>{
  weatherContainer.classList.add("hide");
  errotext.classList.add("hide");
  getWeatherData(cidadeinput);
 try{
  const data = await getWeatherData(cidadeinput);
  cidadeElement.innerText = data.name;
  tempoElement.innerText = "Temperatura: " + parseInt(data.main.temp)+"ºC";
  sensacaoElement.innerText = "Sensação Térmica: " + parseInt(data.main.feels_like)+"ºC";
  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
  countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/shiny/64.png`);
  umidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;
  latitude.innerText = `Latitude: ${data.coord.lat}`;
  longetude.innerText = `Longitude: ${data.coord.lon}`
  // document.body.style.backgroundImage = `url("img/sol.jpg")`;
  weatherContainer.classList.remove("hide");
  errotext.classList.add("hide");
 }
  catch(e){
    errotext.classList.remove("hide");
    weatherContainer.classList.add("hide");
}};

const showWeatherDatalat = async (latinput,longinput) =>{
  weatherContainer.classList.add("hide");
  errotext.classList.add("hide");
  getWeatherDatalat(latinput,longinput);
 try{
  const data = await getWeatherDatalat(latinput,longinput);
  cidadeElement.innerText = data.name;
  tempoElement.innerText = "Temperatura: " + parseInt(data.main.temp)+"ºC";
  sensacaoElement.innerText = "Sensação Térmica: " + parseInt(data.main.feels_like)+"ºC";
  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
  countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/shiny/64.png`);
  umidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;
  latitude.innerText = `Latitude: ${data.coord.lat}`;
  longetude.innerText = `Longitude: ${data.coord.lon}`
  // document.body.style.backgroundImage = `url("img/sol.jpg")`;
  weatherContainer.classList.remove("hide");
  errotext.classList.add("hide");
 }
  catch(e){
    errotext.classList.remove("hide");
    weatherContainer.classList.add("hide");
}

}
//FAZ A CONEXÃO COM A API PASSANDO O INPUT CIDADE
const getWeatherData = async(cidadeinput) =>{

  toggleLoader();
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidadeinput}&units=metric&appid=${apiKey}&lang=pt_br`
  const res= await fetch(apiWeatherURL)
  const data =await res.json();
  console.log(data);
  toggleLoader();

  return data;
}

//FAZ A CONEXÃO COM A API PASSANDO O INPUT LATITUDE/LONGITUDE
const getWeatherDatalat = async(latinput,longinput) =>{

  toggleLoader();
  const apiWeatherURLlat = `https://api.openweathermap.org/data/2.5/weather?lat=${latinput}&lon=${longinput}&units=metric&appid=${apiKey}&lang=pt_br`
  const res= await fetch(apiWeatherURLlat)
  const data =await res.json();
  console.log(data);
  toggleLoader();

  return data;
}

const toggleLoader = () => {
  loader.classList.toggle("hide");
};

const displaylatitude = () =>{
  divcidade2.classList.add("hide");
  latin2.classList.remove("hide");

  buttonlat = document.getElementById("latbutton");
  buttoncidade = document.getElementById("cidadebutton");
  buttonlat.classList.toggle("clicked");
  buttoncidade.classList.remove("clicked");
};
const displaycidade = () => {
  latin2.classList.add("hide");
  divcidade2.classList.remove("hide");

  buttonlat = document.getElementById("latbutton");
  buttoncidade = document.getElementById("cidadebutton");
  buttoncidade.classList.toggle("clicked");
  buttonlat.classList.remove("clicked");
}

