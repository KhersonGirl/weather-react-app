import "./App.css";
import SearchWeather from "./SearchWeather";
import ReactAnimatedWeather from "react-animated-weather";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <SearchWeather />
      </header>
      <section className="App-section">
        <div className="Weather-description row">
          <div className="col-6">
            <h2>Paris</h2>

            <p>Thusday 12:00</p>
            <p>Clear</p>
          </div>
          <div className="col-6">
            <p>Humidity 20%</p>
            <p>Pressure 1010pH</p>
            <p>Wind 5 km/h</p>
          </div>
        </div>
        <div className="Current-temperature d-inline-flex">
          <ReactAnimatedWeather
            icon={"CLEAR_DAY"}
            color={"#0B5ED7"}
            size={80}
            animate={true}
          />

          <h1>23°C</h1>
        </div>
        <div className="Forcast">
          <div className="row">
            <div className="col-3">
              <h3>Wed</h3>
              <ReactAnimatedWeather
                icon={"PARTLY_CLOUDY_DAY"}
                color={"#0B5ED7"}
                size={50}
                animate={true}
              />
              <p>
                <strong>20</strong>/14
              </p>
            </div>
            <div className="col-3">
              <h3>Thur</h3>
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color={"#0B5ED7"}
                size={50}
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
                size={50}
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
                size={50}
                animate={true}
              />
              <p>
                <strong>18</strong>/13
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>
          <a href="">Open-source code</a>, by Nataliia Khanina
        </p>
      </footer>
    </div>
  );
}

export default App;
