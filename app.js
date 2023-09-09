const apiKey = "6c6ab19ea027118c671eaacb63d9d1c8";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// window.addEventListener("load", checkWeather);

const searchbutton = document.querySelector("#searchbtn");
const weatherimg = document.querySelector(".weatherimg");

searchbutton.addEventListener("click", ()=>{
    checkWeather();
})

async function checkWeather() {
    let city = document.querySelector("#city").value;
    console.log(city);
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        alert('City not found');
    } else {
        var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&#176;C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".speed").innerHTML = data.wind.speed + "km/hr";

    let weathercond = data.weather[0].main;
    console.log(weathercond);
    weatherimg.src = "images/" + weathercond + ".png";
    }
}