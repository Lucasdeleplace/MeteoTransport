const API_KEY = "11ebf78fe431f8b1a8cb3ad676241309";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

// Charger la ville depuis conf.json
fetch("conf.json")
    .then(response => response.json())
    .then(data => {
        const ville = data.ville;
        getWeather(ville);
    })
    .catch(error => console.error("Erreur chargement ville :", error));

// Fonction pour récupérer la météo
function getWeather(ville) {
    fetch(`${API_URL}${ville}&appid=${API_KEY}&units=metric&lang=fr`)
        .then(response => response.json())
        .then(data => updateUI(data))
        .catch(error => console.error("Erreur récupération météo :", error));
}

// Fonction pour mettre à jour l'affichage
function updateUI(data) {
    document.getElementById("city-name").textContent = data.name;
    document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("humidity").textContent = `Humidité : ${data.main.humidity}%`;
    document.getElementById("wind").textContent = `Vent : ${Math.round(data.wind.speed * 3.6)} km/h`;

    // Récupérer et afficher l'icône météo
    const iconCode = data.weather[0].icon;
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

// Rafraîchir les données toutes les heures
setInterval(() => {
    fetch("conf.json")
        .then(response => response.json())
        .then(data => getWeather(data.ville));
}, 3600000);
