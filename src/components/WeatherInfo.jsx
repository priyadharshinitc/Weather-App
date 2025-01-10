import React from 'react';

import thunderstorm from '../assets/weather/thunderstorm.svg';
import drizzle from '../assets/weather/drizzle.svg';
import rain from '../assets/weather/rain.svg';
import snow from '../assets/weather/snow.svg';
import atmosphere from '../assets/weather/atmosphere.svg';
import clear from '../assets/weather/clear.svg';
import clouds from '../assets/weather/clouds.svg';

const WeatherInfo = (props) => {
  // console.log(props.weatherDetails);
  const {
    name: country,
    main: {temp, humidity},
    weather: [{id, main}],
    wind: {speed}
  } = props.weatherDetails;

  function getWeatherIcon(id) {
    // console.log(id)
    // console.log(typeof id)
    if(id <= 232) return thunderstorm;
    if(id <= 321) return drizzle;
    if(id <= 531) return rain;
    if(id <= 622) return snow;
    if(id <= 781) return atmosphere;
    if(id <= 800) return clear;
    else return clouds;
  }

  function getCurrentDate() {
    const currentDate = new Date();
    const options = {
      weekday: 'short',
      day: '2-digit',
      month: 'short'
    }

    return currentDate.toLocaleDateString('en-GB', options);
  }

  return (
    <>
        <section className={`weather-info flex flex-col justify-center h-1/2 gap-2`}>
          <div className="location-date-container flex justify-between items-center">
            <div className="location flex items-center gap-1">
              <span className="material-symbols-outlined">
                location_on
              </span>
              <h4 className="country-txt">{country}</h4>
            </div>
            <h5 className="current-date-txt regular-txt">{getCurrentDate()}</h5>
          </div>

          <div className="weather-summary-container flex justify-between items-center">
            <img src={getWeatherIcon(id)} alt={main} className="weather-summary-img w-[120px] h-[120px]" />
            <div className="weather-summary-info text-end">
              <h1 className="temp-txt text-2xl">{Math.round(temp)} °C</h1>
              <h3 className="condition-txt regular-txt text-xl">{main}</h3>
            </div>
          </div>

          <div className="weather-conditions-container flex justify-between items-center">
            <div className="condition-item flex items-center gap-1">
              <span className="material-symbols-outlined text-3xl">
                water_drop
              </span>
              <div className="condition-info">
                <h5 className="regular-txt">Humidity</h5>
                <h5 className="humidity-value-txt">{humidity + " %"}</h5>
              </div>
            </div>

            <div className="condition-item flex items-center gap-1">
              <span className="material-symbols-outlined text-3xl">
                air
              </span>
              <div className="condition-info">
                <h5 className="regular-txt">Wind Speed</h5>
                <h5 className="wind-value-txt">{speed + " m/s"}</h5>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

export default WeatherInfo;