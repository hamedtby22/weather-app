import React from 'react';

//services
import { formatToLocalTime } from "../../Services/WeatherService";

//styles 
import './timelocation.scss';

const TimeLocation = ({ weather: { dt, timezone, name, country } }) => {

    return (
        <div>
            <div className="time">
                <p>
                {formatToLocalTime(dt, timezone)}
                </p>
            </div>

            <div className="location">
                <p>{`${name}, ${country}`}</p>
            </div>
        </div>
    );
};

export default TimeLocation;