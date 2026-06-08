const apiKey = "YOUR_API_KEY";

async function getWeather() {
    let city = document.getElementById("cityInput").value;
    let error = document.getElementById("error");


    if (city === "") {
        error.textContent = "Please enter a city name 😅";
        error.style.display = "block";
        return;
    }


    error.style.display = "none"; // hide error if any


    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    try {
        let response = await fetch(url);
        let data = await response.json();


        // If wrong city entered
        if (data.cod === "404") {
            error.textContent = "City not found ❌";
            error.style.display = "block";


            // hide previous weather data
            document.getElementById("weatherIcon").style.display = "none";
            document.getElementById("cityName").textContent = "--";
            document.getElementById("temperature").textContent = "--";
            document.getElementById("condition").textContent = "--";
            document.getElementById("feelsLike").textContent = "--";
            document.getElementById("humidity").textContent = "--";
            document.getElementById("wind").textContent = "--";
            return;
        }


        // SUCCESS → Show data
        error.style.display = "none";


        document.getElementById("cityName").textContent = data.name;
        document.getElementById("temperature").textContent = data.main.temp + "°C";
        document.getElementById("condition").textContent = data.weather[0].main;


        // Icon
        let iconCode = data.weather[0].icon;
        let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        let img = document.getElementById("weatherIcon");
        img.src = iconUrl;
        img.style.display = "block";


        // Advanced details
        document.getElementById("feelsLike").textContent = data.main.feels_like;
        document.getElementById("humidity").textContent = data.main.humidity;
        document.getElementById("wind").textContent = (data.wind.speed * 3.6).toFixed(1);


    } catch (err) {
        error.textContent = "Something went wrong 😢";
        error.style.display = "block";
    }
}
