import React from "react";
import thunderstorm from '../assets/weather/thunderstorm.svg';
import drizzle from '../assets/weather/drizzle.svg';
import rain from '../assets/weather/rain.svg';
import snow from '../assets/weather/snow.svg';
import atmosphere from '../assets/weather/atmosphere.svg';
import clear from '../assets/weather/clear.svg';
import clouds from '../assets/weather/clouds.svg';

const ForecastInfo = (props) => {
    console.log(props.forecastDetails);
//   const {
//     dt_txt: date,
//     weather: [{ id }],
//     main: {temp}
//   } = props.forecastDetails;
  return (
    <>
      <div className="forecast-items-container flex gap-3 overflow-scroll overflow-y-hidden pb-3">
        <div className="forecast-item min-w-[80px] bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] transition duration-300 flex flex-col gap-1 p-2 items-center rounded-md">
          <h5 className="forecast-item-date regular-txt">06 Aug</h5>
          <img
            src={thunderstorm}
            className="forecast-item-img w-[35px] h-[35px]"
          />
          <h5 className="forecast-item-temp">28 ℃</h5>
        </div>

        <div className="forecast-item min-w-[80px] bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] transition duration-300 flex flex-col gap-1 p-2 items-center rounded-md">
          <h5 className="forecast-item-date regular-txt">06 Aug</h5>
          <img
            src={thunderstorm}
            className="forecast-item-img w-[35px] h-[35px]"
          />
          <h5 className="forecast-item-temp">28 ℃</h5>
        </div>

        <div className="forecast-item min-w-[80px] bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] transition duration-300 flex flex-col gap-1 p-2 items-center rounded-md">
          <h5 className="forecast-item-date regular-txt">06 Aug</h5>
          <img
            src={thunderstorm}
            className="forecast-item-img w-[35px] h-[35px]"
          />
          <h5 className="forecast-item-temp">28 ℃</h5>
        </div>

        <div className="forecast-item min-w-[80px] bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] transition duration-300 flex flex-col gap-1 p-2 items-center rounded-md">
          <h5 className="forecast-item-date regular-txt">06 Aug</h5>
          <img
            src={thunderstorm}
            className="forecast-item-img w-[35px] h-[35px]"
          />
          <h5 className="forecast-item-temp">28 ℃</h5>
        </div>
      </div>
    </>
  );
};

export default ForecastInfo;