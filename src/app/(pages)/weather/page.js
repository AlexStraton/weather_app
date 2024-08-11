"use client";
import { useState } from "react";

export default function WeatherPage() {
  const [weatherData, setWeatherdata] = useState(null);

  async function FetchWeather() {
    return fetch(
      "http://api.weatherapi.com/v1/current.json?key=ca1d2f6f771141fda4a150639241108&q=London&aqi=no"
    )
      .then(async (data) => {
        const weather = await data.json();
        console.log(weather);
        const { current, location } = weather;
        setWeatherdata(location);
        return weather;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //sunny icon, temp, add a way to switch between F and Celsius
  return (
    <div>
      <p>Weather Page</p>
      <div>
        {weatherData ? (
          <div>
            <p>Location: {weatherData.name}</p>
            <p>Region: {weatherData.region}</p>
            <p>Country: {weatherData.country}</p>
            <p>Local Time: {weatherData.localtime}</p>
          </div>
        ) : (
          <p>No weather data available.</p>
        )}
      </div>

      <button onClick={FetchWeather}>Fetch Weather</button>
    </div>
  );
}
