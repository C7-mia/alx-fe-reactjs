# Weather Dashboard

A responsive Weather Dashboard built with React (Vite) and Tailwind CSS.  
Search any city to see current temperature, humidity, wind speed, and conditions—auto refreshes every few minutes.

## Features
- Search weather by city (OpenWeatherMap)
- Temperature, humidity, wind, condition icon
- Error handling for invalid cities / network
- Auto-refresh interval (configurable)
- Recent searches (localStorage)
- Optional unit toggle °C/°F

## Tech
- React (Vite)
- Tailwind CSS
- Axios
- OpenWeatherMap API

## Setup

```bash
npm install
cp .env.example .env
# edit .env to add your OpenWeatherMap key
npm run dev