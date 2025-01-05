import React, { useState } from 'react'
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import SearchCity from './SearchCity';
import NotFoundPage from './NotFoundPage';

const InputContainer = () => {
    const [cityInput,setCityInput] = useState("");
    // const [cityName, setCityName] = useState("");
    const [weatherDetails, setWeatherDetails] = useState(null);
    const [error, setError] = useState(false)
    const apiKey = 'ee949cc184264765ad2f53c854eb1a81';
    
    function handleInputChange(event) {
        let tempInput = event.target.value;
        setCityInput(tempInput);
    }

    function handleSearch() {
        if(cityInput.trim() !== "") {
            // console.log(cityInput.trim());
            // setCityName(cityInput.trim());
            // console.log(cityName)
            updateWeatherInfo(cityInput.trim());
            // setCityInput("");
        }
    }

    function handleKeyPress(event) {
        if(event.key === "Enter" && event.target.value !== "") {
            handleSearch();
        }
    }

    async function getWeatherData(endPoint, city) {
      try {
        setError(false); // Reset error before fetching
        setWeatherDetails(null); // Clear previous data

        const apiURL = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios(apiURL);

        return response;
      } catch(error) {
        console.error('Error fetching weather data:', error);
        throw error; // Re-throw error to let the calling function handle it
      }
    }
    
    async function updateWeatherInfo(city) {
      try {
        const weatherData = await getWeatherData('weather', city);
        // console.log(weatherData);

        if(weatherData.status === 200) {
          setWeatherDetails(weatherData.data);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }      
    }

  return (
    <>
        <header className="input-container relative mb-6">
          <input
            type="text"
            placeholder="Enter City"
            className="city-input w-full px-4 py-2 border-transparent focus:border-2 focus:border-solid focus:border-[rgba(0,0,0,0.35)] bg-[rgba(0,0,0,0.15)] rounded-full placeholder-[rgba(255,255,255,0.95)] outline-none font-normal transition-border duration-2000 pr-11"
            value={cityInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <button className="search-btn absolute right-4 top-1/2 transform -translate-y-1/2 flex" onClick={handleSearch}>
            <span className="material-symbols-outlined">search</span>
          </button>
        </header>
        {!cityInput && <SearchCity />}
        {cityInput && weatherDetails && <WeatherInfo weatherDetails = {weatherDetails} />}
        {cityInput && error && <NotFoundPage />}
    </>
  )
}

export default InputContainer