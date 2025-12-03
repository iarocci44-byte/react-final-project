import React from "react";
import "../App.css";

function search() {
  return (
    <div>
      <section className="search__section">
        <input
          type="text"
          id="searchBox"
          placeholder="Search for movies by title..."
        />
        <button onclick="sendDataToJS()">Search</button>
        <div id="year-filter" className="year-filter">
          <label htmlFor="yearMin">Year range:</label>
          <div className="year-slider-wrap">
            <input type="range" id="yearMin" />
            <input type="range" id="yearMax" />
          </div>
          <div className="year-values">
            <span id="yearMinValue"></span>
            <span>—</span>
            <span id="yearMaxValue"></span>
          </div>
          <div
            id="yearRangeDisplay"
            class="year-range-display"
            aria-live="polite"
          ></div>
        </div>
      </section>
    </div>
  );
}

export default search;
