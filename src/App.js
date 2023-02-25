import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

//components
import TopButtons from './components/TopButtons/TopButtons';
import Inputs from './components/Inputs/Inputs';
import TimeLocation from "./components/TimeLocation/TimeLocation";
import TempAndDetail from "./components/TempAndDetails/TempAndDetail";
import Forecast from "./components/Forecast/Forecast";

//services
import getFormattedWeatherData from "./Services/WeatherService";

//styles
import './scss/App.scss';
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [query, setQuery] = useState({ q: "tehran" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
        console.log(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className='App'>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div>
          <TimeLocation weather={weather} />
          <TempAndDetail weather={weather} />

          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
