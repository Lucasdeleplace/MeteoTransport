# Application Météo en Temps Réel

Une application web simple qui affiche les conditions météorologiques en temps réel pour une ville spécifique.

## 🌟 Fonctionnalités

- Affichage de la température en temps réel
- Description des conditions météorologiques
- Taux d'humidité
- Vitesse du vent
- Icône représentative des conditions météorologiques
- Mise à jour automatique toutes les heures
- Interface responsive adaptée à tous les écrans
- Gestion sécurisée de la clé API côté client

## 🛠️ Technologies Utilisées

- HTML5
- CSS3
- JavaScript (Vanilla)
- API OpenWeatherMap
- LocalStorage pour la gestion de la clé API

## 📦 Installation

1. Clonez ce dépôt :

```bash
git clone [URL_DU_REPO]
```
2. Configurez la ville dans le fichier `conf.json`

3. Ouvrez `index.html` dans votre navigateur

## ⚙️ Configuration

1. Pour changer la ville, modifiez simplement la valeur de "ville" dans le fichier `conf.json`.

2. Lors de la première utilisation, vous devrez :
   - Créer un compte sur [OpenWeatherMap](https://openweathermap.org/)
   - Obtenir votre clé API gratuite
   - Entrer cette clé dans le formulaire de configuration de l'application

## 🔑 Gestion de la Clé API

L'application utilise l'API OpenWeatherMap et gère la clé API de manière sécurisée :

- La clé est stockée localement dans le navigateur de l'utilisateur
- Aucune clé n'est partagée ou stockée sur un serveur
- Chaque utilisateur doit utiliser sa propre clé API
- La clé peut être facilement mise à jour via l'interface si nécessaire

## 📱 Compatibilité

L'application est responsive et compatible avec :

- Ordinateurs de bureau
- Tablettes
- Smartphones

## 🔒 Sécurité

- Les clés API sont stockées uniquement dans le localStorage du navigateur
- Aucune donnée sensible n'est partagée ou stockée sur des serveurs externes
- L'application peut être hébergée en toute sécurité sur GitHub Pages

