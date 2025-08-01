const apiKey = '12bdad6e582cb0b8a9643c0798e7b304'; // Replace with your OpenWeatherMap API key

document.getElementById('getWeather').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value;
  if (!city) return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('weatherLocation').textContent = `📍 ${data.name}, ${data.sys.country}`;
      document.getElementById('weatherTemp').textContent = `🌡️ ${Math.round(data.main.temp)}°C`;
      document.getElementById('weatherDesc').textContent = `☁️ ${data.weather[0].description}`;
    })
    .catch(err => {
      document.getElementById('weatherLocation').textContent = '❌ City not found';
      document.getElementById('weatherTemp').textContent = '';
      document.getElementById('weatherDesc').textContent = '';
    });
});

const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.style.display = "none";
  }
});