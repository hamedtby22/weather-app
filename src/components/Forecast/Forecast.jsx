import React from "react";

//services
import { iconUrlFromCode } from "../../Services/WeatherService";

const Forecast = ({title,items}) => {
    return (
        <div>
            <div className="forecast-title">
                <p>{title}</p>
            </div>
            <div className="forecast-items">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="forecast-section"
                    >
                        <p>{item.title}</p>
                        <img
                        src={iconUrlFromCode(item.icon)}
                        alt=""
                        />
                        <p style={{fontSize:'medium'}}>{`${item.temp.toFixed()}°`}</p>
                    </div>
                ))}
        </div>
    </div>
    );
};

export default Forecast;