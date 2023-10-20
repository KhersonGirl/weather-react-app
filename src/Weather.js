import React from "react";
import "./Weather.css";
import axios from "axios";
import { useState } from "react";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);


  
  function handleResponse(response) {
    
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }
  function search() {
    const apiKey = "535cacbb3f8a0df0aeb4790235b9541f";

    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

   function handleSubmit(event){
    event.preventDefault();
    search();


   } 
   function handleCityChange(event){
    setCity(event.target.value);
   }
    

  if (weatherData.ready) {
    return (
      <div className="Weather container">
        <div className="Wrapper">
          <header className="Weather-header mt-3">
            <div className="Search-form ">
              <form className="row ms-1"
              onSubmit={handleSubmit}
              >
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="col-7"
                  onChange={handleCityChange}
                />

                <button
                  type="button"
                  className="btn btn-primary  col"
                  autoFocus="on"
                >
                  Search
                </button>
                <button type="button" className="btn btn-success col d-none d-md-block ">
                  Current
                </button>
              </form>
            </div>
            <WeatherInfo data={weatherData} />

          </header>
          </div>
        <footer className="Weather-footer mt-3">
          <p>
            <a
              href="https://github.com/KhersonGirl/weather-react-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            , by Nataliia Khanina
          </p>
        </footer>
      </div>
    );
  } else {
    search();
    return ("Loading...")
  }
}
  


  