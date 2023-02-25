import React from 'react';
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
  } from "@iconscout/react-unicons";

//services
import { formatToLocalTime, iconUrlFromCode } from '../../Services/WeatherService';

//styles
import './tempanddetail.scss';

const TempAndDetail = ({
    weather: {
      details,
      icon,
      temp,
      temp_min,
      temp_max,
      sunrise,
      sunset,
      speed,
      humidity,
      feels_like,
      timezone,
    },
  }) => {
    return (
        <div>
            <div className="text">
                <p>{details}</p>
            </div>
            <div className="details">
                <img src={iconUrlFromCode(icon)} alt="" />
                <p>{`${temp.toFixed()}°`}</p>
                <div className="details-weather">
                    <div className="details-weather-real">
                        <UilTemperature size={18} />
                        Real fell:
                        <span>{`${feels_like.toFixed()}°`}</span>
                    </div>
                    <div className="details-weather-real">
                        <UilTear size={18} />
                        Humidity:
                        <span>{`${humidity.toFixed()}%`}</span>
                    </div>
                    <div className="details-weather-real">
                        <UilWind size={18} />
                        Wind:
                        <span>{`${speed.toFixed()} km/h`}</span>
                    </div>
                </div>
            </div>
            <div className="details-weather-rise">
                <UilSun />
                <p>
                Rise:{" "}
                <span>
                    {formatToLocalTime(sunrise, timezone, "hh:mm a")}
                </span>
                </p>
                <p>|</p>

                <UilSunset />
                <p>
                Set:{" "}
                <span>
                    {formatToLocalTime(sunset, timezone, "hh:mm a")}
                </span>
                </p>
                <p>|</p>

                <UilSun />
                <p>
                High:{" "}
                <span>{`${temp_max.toFixed()}°`}</span>
                </p>
                <p>|</p>

                <UilSun />
                <p>
                Low:{" "}
                <span>{`${temp_min.toFixed()}°`}</span>
                </p>
            </div>
        </div>
    );
};

export default TempAndDetail;