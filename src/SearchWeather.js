import React from "react";
import "./App.css";


export default function SearchWeather() {
  return (
    <div className="Search-form ">
      <form className="row">
        <input type="search" placeholder="Enter a city..." className="col-6" />
        <button type="button" className="btn btn-primary col-3">
          Search
        </button>
        <button type="button" className="btn btn-success col-3">
          Current
        </button>
      </form>
    </div>
  );
}
