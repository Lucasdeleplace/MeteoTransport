const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

// Fonction pour vérifier si une clé API est stockée
function checkApiKey() {
  const apiKey = localStorage.getItem("weatherApiKey");
  if (!apiKey) {
    document.getElementById("api-form").style.display = "block";
    document.getElementById("weather-container").style.display = "none";
    return false;
  }
  return true;
}

// Fonction pour sauvegarder la clé API
function saveApiKey(event) {
  event.preventDefault();
  const apiKey = document.getElementById("api-key-input").value.trim();
  if (apiKey) {
    localStorage.setItem("weatherApiKey", apiKey);
    document.getElementById("api-form").style.display = "none";
    document.getElementById("weather-container").style.display = "block";
    // Charger la météo après avoir sauvegardé la clé
    loadWeather();
  }
}

// Fonction pour charger la météo initiale
function loadWeather() {
  if (checkApiKey()) {
    fetch("conf.json")
      .then((response) => response.json())
      .then((data) => {
        const ville = data.ville;
        getWeather(ville);
      })
      .catch((error) => console.error("Erreur chargement ville :", error));
  }
}

// Fonction pour récupérer la météo
function getWeather(ville) {
  const apiKey = localStorage.getItem("weatherApiKey");
  fetch(`${API_URL}${ville}&appid=${apiKey}&units=metric&lang=fr`)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "401") {
        // Clé API invalide
        localStorage.removeItem("weatherApiKey");
        checkApiKey();
        alert("Clé API invalide. Veuillez en entrer une nouvelle.");
      } else {
        updateUI(data);
      }
    })
    .catch((error) => console.error("Erreur récupération météo :", error));
}

// Fonction pour mettre à jour l'affichage
function updateUI(data) {
  document.getElementById("city-name").textContent = data.name;
  document.getElementById("temperature").textContent = `${Math.round(
    data.main.temp
  )}°C`;
  document.getElementById("description").textContent =
    data.weather[0].description;
  document.getElementById(
    "humidity"
  ).textContent = `Humidité : ${data.main.humidity}%`;
  document.getElementById("wind").textContent = `Vent : ${Math.round(
    data.wind.speed * 3.6
  )} km/h`;

  // Récupérer et afficher l'icône météo
  const iconCode = data.weather[0].icon;
  document.getElementById(
    "weather-icon"
  ).src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

// Modifier l'intervalle de rafraîchissement
setInterval(() => {
  if (checkApiKey()) {
    fetch("conf.json")
      .then((response) => response.json())
      .then((data) => getWeather(data.ville));
  }
}, 3600000);

// Appeler loadWeather au chargement
document.addEventListener("DOMContentLoaded", loadWeather);

// Ajouter cette nouvelle fonction
function resetApiKey() {
  localStorage.removeItem("weatherApiKey");
  document.getElementById("api-form").style.display = "block";
  document.getElementById("weather-container").style.display = "none";
  document.getElementById("api-key-input").value = "";
}
