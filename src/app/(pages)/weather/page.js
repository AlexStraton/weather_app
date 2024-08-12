"use client";
import { useState } from "react";
import formatDate from "@/utils";

export default function WeatherPage() {
  const [weatherData, setWeatherdata] = useState({
    current: null,
    location: null,
  });

  async function FetchWeather() {
    return fetch(
      "http://api.weatherapi.com/v1/current.json?key=ca1d2f6f771141fda4a150639241108&q=London&aqi=no"
    )
      .then(async (data) => {
        const weather = await data.json();
        console.log(weather);
        const { current, location } = weather;
        setWeatherdata({ current, location });
        return weather;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const { current, location } = weatherData;
  //sunny icon, temp, add a way to switch between F and Celsius
  return (
    <section className='flex items-center justify-center min-h-screen bg-gray-100'>
      <main
        className='bg-sky-300 mt-52 rounded-xl p-6 max-w-lg content-center
    '>
        <p className='text-center text-4xl '>Here is today's weather</p>
        <div className='text-center mt-20 text-2xl'>
          {current && location ? (
            <div>
              <div>
                <p> Day: {current.is_day}</p>
                <p>Local Time: {formatDate(location.localtime)}</p>
              </div>
              <p>Location: {location.name}</p>
              <p>Region: {location.region}</p>
              <p>Country: {location.country}</p>
              <p>{current.condition.text}</p>
              <img src={current.condition.icon}></img>
              <p>Wind: {current.wind_kph} kph</p>
              <p>Humidity: {current.humidity}</p>
              <p>UV: {current.uv}</p>
              <p>Precipitation: {current.precip_mm}</p>
              <p>Temp: {current.temp_c} Celsius</p>
              <p>Temp: {current.temp_f} Fahrenheight</p>
            </div>
          ) : (
            <p>No weather data available.</p>
          )}
        </div>

        <button onClick={FetchWeather}>Fetch Weather</button>
      </main>
    </section>
  );
}
