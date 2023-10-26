import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container p-0">
        <Weather defaultCity="Kholmsk" />
        <footer>
          <p className="FooterLink">
            This project was coded by Khanina Nataliia, is{" "}
            <a
              href="https://github.com/KhersonGirl/weather-react-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sorced on a GitHab{" "}
            </a>
            and{" "}
            <a
              href="https://roaring-alpaca-90c557.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
