const apiKey = "YOUR_API_KEY";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");


const tempEl = document.querySelector(".temp");
const cityEl = document.querySelector(".city");
const conditionEl = document.querySelector(".condition");


searchBtn.addEventListener("click", () => {
  const cityName = cityInput.value;


  if(cityName === "") {
    alert("Please enter a city name!");
    return;
  }


  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      console.log(data); // For testing


      tempEl.textContent = Math.round(data.main.temp) + "°C";
      cityEl.textContent = data.name;
      conditionEl.textContent = data.weather[0].main;
    })
    .catch(error => {
      alert("City not found!");
      console.error(error);
    });
});




