import React from "react";
import "./App.css";


export default function SearchWeather() {
  return (
    <div className="Search-form ">
      <form className="row">
        <input type="search" placeholder="Enter a city..." className="col-5" />
        <button type="button" className="btn btn-primary col">
          Search
        </button>
        <button type="button" className="btn btn-success col">
          Current
        </button>
      </form>
    </div>
  );
}
