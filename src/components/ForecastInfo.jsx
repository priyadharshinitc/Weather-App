import React from "react";

import thunderstorm from '../assets/weather/thunderstorm.svg';
import drizzle from '../assets/weather/drizzle.svg';
import rain from '../assets/weather/rain.svg';
import snow from '../assets/weather/snow.svg';
import atmosphere from '../assets/weather/atmosphere.svg';
import clear from '../assets/weather/clear.svg';
import clouds from '../assets/weather/clouds.svg';

const ForecastInfo = (props) => {
  // console.log(props.forecastDetails);

  function getModifiedDate(someDate) {
    let randomDate = new Date(someDate);
    let options = {
      day: '2-digit',
      month: 'short'
    }

    return randomDate.toLocaleDateString('en-GB', options);
  }

  function getWeatherIcon(id) {
    // console.log(id);
    // console.log(typeof id);
    if(id <= 232) return thunderstorm;
    if(id <= 321) return drizzle;
    if(id <= 531) return rain;
    if(id <= 622) return snow;
    if(id <= 781) return atmosphere;
    if(id <= 800) return clear;
    else return clouds;
  }

  return (
    <>
      <div className="forecast-items-container flex gap-3 overflow-auto overflow-y-hidden pb-3 mt-4">
        {
          props.forecastDetails.map(function(data, index) {
            return (
              <div key={index} className="forecast-item min-w-[80px] bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.25)] transition duration-500 flex flex-col gap-1 p-2 items-center rounded-md">
                <h5 className="forecast-item-date regular-txt">{getModifiedDate(data.dt_txt)}</h5>
                <img
                  src={getWeatherIcon(data.weather[0].id)}
                  alt={data.weather[0].main}
                  className="forecast-item-img w-[35px] h-[35px]"
                />
                <h5 className="forecast-item-temp text-lg regular-txt">{Math.round(data.main.temp)} °C</h5>
              </div>  
            );
          })
        }
      </div>
    </>
  );
};

export default ForecastInfo;