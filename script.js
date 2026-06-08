const apiKey = "af1793a2be57b99b60d1474fd55cd7fe";


async function getWeather() {
    let city = document.getElementById("cityInput").value;
    let error = document.getElementById("error");
    let loader = document.getElementById("loader");
    let button = document.getElementById("searchBtn");


    if (city === "") {
        error.textContent = "Please enter a city name 😅";
        error.style.display = "block";
        return;
    }


    error.style.display = "none";


    // Show loader + disable button
    loader.style.display = "block";
    button.disabled = true;
    button.textContent = "Loading...";


    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    try {
        let response = await fetch(url);
        let data = await response.json();


        // Check wrong city
        if (data.cod === "404") {
            error.textContent = "City not found ❌";
            error.style.display = "block";


            document.getElementById("weatherIcon").style.display = "none";
            document.getElementById("cityName").textContent = "--";
            document.getElementById("temperature").textContent = "--";
            document.getElementById("condition").textContent = "--";
            document.getElementById("feelsLike").textContent = "--";
            document.getElementById("humidity").textContent = "--";
            document.getElementById("wind").textContent = "--";


        } else {
            // SUCCESS → Fill data
            error.style.display = "none";


            document.getElementById("cityName").textContent = data.name;
            document.getElementById("temperature").textContent = data.main.temp + "°C";
            document.getElementById("condition").textContent = data.weather[0].main;


            // DATE & TIME
let timezoneOffset = data.timezone; // seconds
let localDate = new Date(Date.now() + timezoneOffset * 1000);


let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


document.getElementById("date").textContent =
    days[localDate.getUTCDay()] + ", " +
    localDate.getUTCDate() + "-" +
    (localDate.getUTCMonth() + 1) + "-" +
    localDate.getUTCFullYear();


document.getElementById("localTime").textContent =
    localDate.getUTCHours().toString().padStart(2, "0") + ":" +
    localDate.getUTCMinutes().toString().padStart(2, "0") + ":" +
    localDate.getUTCSeconds().toString().padStart(2, "0");




            // ICON
            let iconCode = data.weather[0].icon;
            let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            let img = document.getElementById("weatherIcon");
            img.src = iconUrl;
            img.style.display = "block";


            // ADVANCED DETAILS
            document.getElementById("feelsLike").textContent = data.main.feels_like;
            document.getElementById("humidity").textContent = data.main.humidity;
            document.getElementById("wind").textContent = (data.wind.speed * 3.6).toFixed(1);
        }


    } catch (err) {
        error.textContent = "Something went wrong 😢";
        error.style.display = "block";
    }


    // Hide loader + enable button
    loader.style.display = "none";
    button.disabled = false;
    button.textContent = "Search";
}


