import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";


export default function Weather() {
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
                <button type="button" className="btn btn-success col">
                  Current
                </button>
              </form>
            </div>
          </header>
          <section className="Weather-section">
            <div className="Weather-description row">
              <div className="col-6">
                <h2>Paris</h2>

                <p>Thusday 12:00</p>
                <p>Clear</p>
              </div>
              <div className="col-6 mt-3">
                <p>Humidity 20%</p>
                <p>Pressure 1010pH</p>
                <p>Wind 5 km/h</p>
              </div>
            </div>
            <div className="Current-temperature d-inline-flex">
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color={"#0B5ED7"}
                size={75}
                animate={true}
              />

              <h1>23°C</h1>
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
            >
              Open-source code
            </a>
            , by Nataliia Khanina
          </p>
        </footer>
      </div>
    );
}