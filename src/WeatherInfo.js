import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";



export default function WeatherInfo(props) {
    return ( 
    <div className="WeatherInfo">
        
          <section className="Weather-section">
            <div className="Weather-description row">
              <div className="col-6">
                <h2>{props.data.city}</h2>

                <p><FormattedDate date={props.data.date}/></p>
                <p className="text-capitalize">{props.data.description}</p>
              </div>
              <div className="col-6 mt-3">
                <p>Humidity {props.data.humidity}%</p>
                <p>Pressure {props.data.pressure}pH</p>
                <p>Wind {props.data.wind} km/h</p>
              </div>
            </div>
            <div className="Current-temperature d-inline-flex">
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color={"#0B5ED7"}
                size={75}
                animate={true}
              />

              <h1>{props.data.temperature}</h1>
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
    
        )
}