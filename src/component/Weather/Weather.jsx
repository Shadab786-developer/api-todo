import React, { useState, useEffect } from "react";

const Weather = ({ city = "Mumbai" }) => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "19e5975dc72132bf3c382552c1c06fae"; // Replace with your OpenWeatherMap API key

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, [city]);

  if (!weather) return null;

  return (
    <div className="bg-blue-50 p-3 rounded-md mt-2">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-500 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
        <div>
          <p className="text-sm font-medium">Weather Alert</p>
          <p className="text-xs text-gray-600">
            Current conditions: {weather.weather[0].main},{" "}
            {Math.round(weather.main.temp)}°C
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
