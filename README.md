# Weather App 🌦️

# 🌦 Advanced Weather App

A modern Weather Application built using HTML, CSS, and JavaScript with OpenWeather API.

---

## 🚀 Features (New Upgrade Version)

- 🔍 Search weather by city name
- 🌡 Real-time temperature display
- ☁ Weather condition with icon
- 🤩 Feels like temperature
- 💧 Humidity details
- 💨 Wind speed (km/h)
- ⚠ Input validation (empty city check)
- ❌ Error handling (wrong city / API failure)
- ⏳ Loader system for better UX
- 🔒 Button disable during loading (prevents multiple requests)

---

## 🆕 What is upgraded from previous version?

### Old Version:
- Basic weather data only
- No error handling
- No loader
- App could break on wrong input

### New Version:
- ✔ Added try-catch error handling
- ✔ Proper user-friendly error messages
- ✔ Loader animation during API call
- ✔ Input validation added
- ✔ Better UI state management
- ✔ Improved user experience
- ✔ More weather details (humidity, wind, feels like)

---

## ⚙ Tech Stack

- HTML
- CSS
- JavaScript (ES6)
- OpenWeather API

---

## 📡 API Used

OpenWeather API is used to fetch real-time weather data.

---

## 🔑 Important Note

- You must add your own OpenWeather API key in the script file:
```js
const apiKey = "YOUR_API_KEY";