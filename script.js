document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    const apiKey = '55fda1cc44d81902fab61dc54a06e439'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('locationName').textContent = data.name;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
                document.getElementById('pressure').textContent = `Pressure: ${data.main.pressure} hPa`;
                document.getElementById('conditions').textContent = `Conditions: ${data.weather[0].description}`;
                document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
            } else {
                alert('Location not found. Please try again.');
            }
        })
        .catch(error => console.error('Error fetching the weather data:', error));
});
