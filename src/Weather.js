import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";
import axios from "axios";
import { useState } from "react";
import FormattedDate from "./FormattedDate";


export default function Weather(prop) {
  
  const [weatherData, setWeatherData] = useState({ready: false});


  
  function handeleResponse(response) {

    setWeatherData ({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt *1000),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      iconUrl: " ",
      city: response.data.name
    })

    console.log(response.data);
    
  }

  


  
  if (weatherData.ready) {
    return (
      <div className="Weather container">
        <div className="Wrapper">
          <header className="Weather-header">
            <div className="Search-form ">
              <form className="row">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="col-7"
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
          </header>
          <section className="Weather-section">
            <div className="Weather-description row">
              <div className="col-6">
                <h2>{weatherData.city}</h2>

                <p><FormattedDate date={weatherData.date}/></p>
                <p className="text-capitalize">{weatherData.description}</p>
              </div>
              <div className="col-6 mt-3">
                <p>Humidity {weatherData.humidity}%</p>
                <p>Pressure {weatherData.pressure}pH</p>
                <p>Wind {weatherData.wind} km/h</p>
              </div>
            </div>
            <div className="Current-temperature d-inline-flex">
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color={"#0B5ED7"}
                size={75}
                animate={true}
              />

              <h1>{weatherData.temperature}</h1>
              <span className="UnitLink">°C |</span>
              <span className="UnitLink">F</span>
            </div>
            <div className="Weather-forcast mt-3">
              <div className="row">
                <div className="col-3">
                  <h3>Wed</h3>
                  <ReactAnimatedWeather
                    icon={"PARTLY_CLOUDY_DAY"}
                    color={"#0B5ED7"}
                    size={30}
                    animate={true}
                  />
                  <p>
                    <strong>20</strong>/14
                  </p>
                </div>
                <div className="col-3">
                  <h3>Thu</h3>
                  <ReactAnimatedWeather
                    icon={"CLEAR_DAY"}
                    color={"#0B5ED7"}
                    size={30}
                    animate={true}
                  />
                  <p>
                    <strong>22</strong>/16
                  </p>
                </div>
                <div className="col-3">
                  <h3>Fri</h3>
                  <ReactAnimatedWeather
                    icon={"CLOUDY"}
                    color={"#0B5ED7"}
                    size={30}
                    animate={true}
                  />
                  <p>
                    <strong>20</strong>/15
                  </p>
                </div>
                <div className="col-3">
                  <h3>Sat</h3>
                  <ReactAnimatedWeather
                    icon={"RAIN"}
                    color={"#0B5ED7"}
                    size={30}
                    animate={true}
                  />
                  <p>
                    <strong>18</strong>/13
                  </p>
                </div>
              </div>
            </div>
          </section>
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
    const apiKey = "535cacbb3f8a0df0aeb4790235b9541f";
    
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${prop.defaultCity}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handeleResponse);
    return ("Loading...")
  }
}