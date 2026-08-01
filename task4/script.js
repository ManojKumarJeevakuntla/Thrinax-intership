const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherDiv = document.getElementById('weather');

async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error('City not found or network error');
    }

    const data = await response.json();
    renderWeather(data);
  } catch (error) {
    weatherDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

function renderWeather(data) {
  const { name, main, weather, wind } = data;
  weatherDiv.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Temperature:</strong> ${main.temp} °C</p>
    <p><strong>Humidity:</strong> ${main.humidity}%</p>
    <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
    <p><strong>Condition:</strong> ${weather[0].description}</p>
  `;
}

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) fetchWeather(city);
});

cityInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    const city = cityInput.value.trim();
    if (city) fetchWeather(city);
  }
});
