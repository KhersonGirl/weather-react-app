import React from "react";
import "./App.css";


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
        <h2>Paris</h2>
        <h1>23°C</h1>
        <ul>
          <li>Thusday 12:00</li>
          <li>Clear</li>
          <li></li>
        </ul>
      </div>
    );
}