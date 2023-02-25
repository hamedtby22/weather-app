import React,{useState} from 'react';
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

//styles
import './inputs.scss';

const Inputs = ({ setQuery, units, setUnits }) => {

    const [city, setCity] = useState("");

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) setUnits(selectedUnit);
      };
    
      const handleSearchClick = () => {
        if (city !== "") setQuery({ q: city });
      };
    
      const handleLocationClick = () => {
        if (navigator.geolocation) {
          toast.info("Fetching users location.");
          navigator.geolocation.getCurrentPosition((position) => {
            toast.success("Location fetched!");
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
    
            setQuery({
              lat,
              lon,
            });
          });
        }
      };

    return (
        <div className='inputs'>
            <div className='inputs-search'>
                <input 
                    type='text' 
                    placeholder='Search for city...' 
                    value={city} 
                    onChange={(e) => setCity(e.currentTarget.value)} 
                />
                <UilSearch
                    size={30}
                    className="icon"
                    onClick={handleSearchClick}
                />
                <UilLocationPoint
                    size={30}
                    className="icon"
                    onClick={handleLocationClick}
                />
            </div>
            <div className="inputs-type">
                <button
                    name="metric"
                    className="icon-xl"
                    onClick={handleUnitsChange}
                >
                °C
                </button>
                <p>|</p>
                <button
                    name="imperial"
                    className="icon-xl"
                    onClick={handleUnitsChange}
                >
                °F
                </button>
            </div>
        </div>
    );
};

export default Inputs;