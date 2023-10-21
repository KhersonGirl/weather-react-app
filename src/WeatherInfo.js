import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className=" row mt-3">
        <div className="col-6">
          <h2 className="mb-2">{props.data.city}</h2>

          <p>
            <FormattedDate date={props.data.date} />
          </p>
          <p className="text-capitalize">{props.data.description}</p>
        </div>
        <div className="col-6 mt-5">
          <p>
            Humidity: <span className="WeatherData">{props.data.humidity}</span>%
          </p>
          <p>
            Pressure: <span className="WeatherData"> {props.data.pressure}</span>
            hPa
          </p>
          <p>Wind:
            <span className="WeatherData"> {props.data.wind}</span>km/h
          </p>
        </div>
      </div>
      <WeatherIcon code={props.data.icon} />

      <WeatherTemperature celsius={props.data.temperature} />

      <div className="Weather-forcast">
        <div className="row">
          <div className="col-2">
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
          <div className="col-2">
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
          <div className="col-2">
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
          <div className="col-2">
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
          <div className="col-2">
            <h3>Sun</h3>
            <ReactAnimatedWeather
              icon={"RAIN"}
              color={"#0B5ED7"}
              size={30}
              animate={true}
            />
            <p>
              <strong>15</strong>/11
            </p>
          </div>
          <div className="col-2">
            <h3>Mo</h3>
            <ReactAnimatedWeather
              icon={"RAIN"}
              color={"#0B5ED7"}
              size={30}
              animate={true}
            />
            <p>
              <strong>17</strong>/10
            </p>
          </div>
        </div>
      </div> 
    </div>
  );
}
