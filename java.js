

// const apikey = "69c758cc8da9ffe8aa26ae15705f9af6";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}"

// const apikey = "beab5c52511670d58098395f5d198e18"

// const qwer = 'https://api.openweathermap.org/data/2.5/weather?q=${erode}&appid=${apikey}';

// console.log(apikey);
// console.log(qwer);

// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=erode"

const apikey = "beab5c52511670d58098395f5d198e18"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// console.log(apiUrl);
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}` );
    // console.log(response);
    // const response = await fetch(apiUrl + apikey );
    // var data=await response.json();
    var data = await response.json();

   console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round( data.main.temp )+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h " ;
    document.querySelector(".weather").computedStyleMap.display="block";
}

// checkweather();

searchBtn.addEventListener("click" , () =>{
    checkweather(searchBox.value);
})
