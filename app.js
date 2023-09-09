const apiKey = "6c6ab19ea027118c671eaacb63d9d1c8";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// window.addEventListener("load", checkWeather);

const searchbutton = document.querySelector("#searchbtn");


searchbutton.addEventListener("click", ()=>{
    checkWeather();
})

async function checkWeather() {
    var city = document.querySelector("#city").value;
    console.log(city);
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&#176;C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".speed").innerHTML = data.wind.speed + "km/hr";
}