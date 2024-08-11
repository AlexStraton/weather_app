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
        //const { current, location } = weather;
        setWeatherdata(weather);
        return weather;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //sunny icon, temp, add a way to switch between F and Celsius
  return (
    <main
      className='bg-sky-300 mt-52 rounded-xl p-6 max-w-lg content-center
    '>
      <p className='text-center text-4xl '>Here is today's weather</p>
      <div className='text-center mt-20 text-2xl'>
        {weatherData ? (
          <div>
            <p>Location: {weatherData.location.name}</p>
            <p>Region: {weatherData.location.region}</p>
            <p>Country: {weatherData.location.country}</p>
            <p>Local Time: {weatherData.location.localtime}</p>
            <p>{weatherData.current.condition.text}</p>
            <img src={weatherData.current.condition.icon}></img>
            <p> Day: {weatherData.current.is_day}</p>
            <p>Wind: {weatherData.current.wind_kph} kph</p>
            <p>Humidity: {weatherData.current.humidity}</p>
            <p>UV: {weatherData.current.uv}</p>
            <p>Precipitation: {weatherData.current.precip_mm}</p>
            <p>Temp: {weatherData.current.temp_c} Celsius</p>
            <p>Temp: {weatherData.current.temp_f} Celsius</p>
          </div>
        ) : (
          <p>No weather data available.</p>
        )}
      </div>

      <button onClick={FetchWeather}>Fetch Weather</button>
    </main>
  );
}
