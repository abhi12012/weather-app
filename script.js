const apiKey = "YOUR_API_KEY";

async function getWeather() {
    let city = document.getElementById("cityInput").value;


    if (city === "") {
        alert("Please enter a city name");
        return;
    }


    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    let response = await fetch(url);
    let data = await response.json();


    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent = data.main.temp + "°C";
    document.getElementById("condition").textContent = data.weather[0].main;


    let iconCode = data.weather[0].icon;
let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;


let img = document.getElementById("weatherIcon");
img.src = iconUrl;
img.style.display = "block";
}



