import React, { useState } from 'react'
import axios from 'axios';
import SearchCity from './SearchCity';
import WeatherInfo from './WeatherInfo';
import ForecastInfo from './ForecastInfo';
import NotFoundPage from './NotFoundPage';

const InputContainer = () => {
  const [cityInput,setCityInput] = useState("");
  const [cityName, setCityName] = useState("");

  const [weatherDetails, setWeatherDetails] = useState(null);
  const [forecastDetails, setForecastDetails] = useState([]);

  const [weatherError, setWeatherError] = useState(false);

  const apiKey = 'ee949cc184264765ad2f53c854eb1a81';
  
  function handleInputChange(event) {
    let tempInput = event.target.value;
    setCityInput(tempInput);
    setCityName(tempInput.trim());
  }

  function handleSearch() {
    if(cityName !== "") {
      updateWeatherInfo(cityName);
    }
  }

  function handleKeyPress(event) {
    if(event.key === "Enter" && event.target.value !== "") {
      handleSearch();
    }
  }

  async function getData(endPoint, city) {
    try {
      const apiURL = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
      const response = await axios(apiURL);

      return response;
    } catch(error) {
      // console.error('Error fetching weather data:', error);
      throw error; // Re-throw error to let the calling function handle it
    }
  }

  async function updateForecastsInfo(city) {      
    try {
      setForecastDetails([]);

      const forecastsData = await getData('forecast', city);
      // console.log(forecastsData.data);

      if(forecastsData.status !== 200) {
        throw new Error('Failed to fetch forecast data');
      }
      
      const timeTaken = '12:00:00';
      // const todayDate = new Date().toISOString();
      // console.log(todayDate);
      // 2025-01-05T07:23:08.537Z

      // const todayDate = new Date().toISOString().split('T');
      // console.log(todayDate);
      // ['2025-01-05', '07:24:51.791Z']

      const todayDate = new Date().toISOString().split('T')[0];
      // console.log(todayDate);
      // 2025-01-05

      const relevantForecasts = forecastsData.data.list.filter(forecastWeather => {
        return (
          forecastWeather.dt_txt.includes(timeTaken) &&
          !forecastWeather.dt_txt.startsWith(todayDate) // Ensures it's not today's date
        );
      });

      setForecastDetails(relevantForecasts); // Directly set the filtered list
      // console.log("Filtered Forecast Details:", relevantForecasts);
    } catch (error) {
      console.error('Error updating forecast info:', error);
    }
  }
  
  async function updateWeatherInfo(city) {
    try {
      setWeatherError(false); // Reset error before fetching
      setWeatherDetails(null); // Clear previous data

      const weatherData = await getData('weather', city);
      // console.log("Weather Data: ", weatherData.data);

      if(weatherData.status === 200) {
        setWeatherDetails(weatherData.data);
        await updateForecastsInfo(city);
      }
    } catch (error) {
      console.error("Error fetching weather info: ", error);
      setWeatherDetails(null);
      setWeatherError(true);
      setForecastDetails([]);
    }
  }

  return (
    <>
        <header className="input-container relative mb-6">
          <input
            type="text"
            placeholder="Search City"
            className="city-input w-full px-4 py-2 border-transparent focus:border-2 focus:border-solid focus:border-[rgba(0,0,0,0.35)] bg-[rgba(0,0,0,0.25)] rounded-full placeholder-[rgba(255,255,255,0.95)] outline-none font-normal transition-border duration-2000 pr-11"
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <button className="search-btn absolute right-4 top-1/2 transform -translate-y-1/2 flex" onClick={handleSearch}>
            <span className="material-symbols-outlined">search</span>
          </button>
        </header>
        {!cityInput && <SearchCity />}
        {cityInput && weatherDetails && <WeatherInfo weatherDetails={weatherDetails} />}
        {cityInput && forecastDetails && <ForecastInfo forecastDetails={forecastDetails} />}
        {cityInput && weatherError && <NotFoundPage />}
    </>
  )
}

export default InputContainer;