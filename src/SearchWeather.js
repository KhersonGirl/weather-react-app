import React from "react";
import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function SearchWeather() {
  return (
    <div className="container">
      <form>
        <input type="search" placeholder="Enter a city..." />
        <button type="button" class="btn btn-primary">
          Search
        </button>
        <button type="button" class="btn btn-success">
          Current
        </button>
      </form>
      <div className="row">
        <div className="col-6">
          <h2>Paris</h2>

          <ul>
            <li>Thusday 12:00</li>
            <li>Clear</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity 20%</li>
            <li>Pressure 1010pH</li>
            <li>Wind 5 km/h</li>
          </ul>
        </div>
      </div>
      <div>
        <ReactAnimatedWeather
          icon={"CLEAR_DAY"}
          color={"#0B5ED7"}
          size={50}
          animate={true}
        />

        <h1>23°C</h1>
      </div>
      <div className="forcast">
        <div className="row">
          <div className="col-3">
            <h3>Wed</h3>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"#0B5ED7"}
              size={50}
              animate={true}
            />
            <p><strong>22</strong>/16</p>
          </div>
          <div className="col-3">
            <h3>Thur</h3>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"#0B5ED7"}
              size={50}
              animate={true}
            />
            <p><strong>22</strong>/16</p>
          </div>
          <div className="col-3">
            <h3>Fri</h3>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"#0B5ED7"}
              size={50}
              animate={true}
            />
            <p><strong>22</strong>/16</p>
          </div>
          <div className="col-3">
            <h3>Sat</h3>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"#0B5ED7"}
              size={50}
              animate={true}
            />
            <p><strong>22</strong>/16</p>
          </div>
        </div>
      </div>
    </div>
  );
}
