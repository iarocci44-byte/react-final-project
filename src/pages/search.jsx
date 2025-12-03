import React, { useState } from "react";
import "../App.css";
import MovieSearch from "../components/movie_search";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [yearMin, setYearMin] = useState(1900);
  const [yearMax, setYearMax] = useState(2025);

  const handleSearch = () => {
    setTriggerSearch(!triggerSearch);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleYearMinChange = (e) => {
    const value = parseInt(e.target.value);
    if (value <= yearMax) {
      setYearMin(value);
    }
  };

  const handleYearMaxChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= yearMin) {
      setYearMax(value);
    }
  };

  return (
    <div>
      <section className="search__section">
        <input
          type="text"
          id="searchBox"
          placeholder="Search for movies by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
        <div id="year-filter" className="year-filter">
          <label htmlFor="yearMin">Year range:</label>
          <div className="year-slider-wrap">
            <input 
              type="range" 
              id="yearMin" 
              min="1900" 
              max="2025" 
              value={yearMin}
              onChange={handleYearMinChange}
            />
            <input 
              type="range" 
              id="yearMax" 
              min="1900" 
              max="2025" 
              value={yearMax}
              onChange={handleYearMaxChange}
            />
          </div>
          <div className="year-values">
            <span id="yearMinValue">{yearMin}</span>
            <span>—</span>
            <span id="yearMaxValue">{yearMax}</span>
          </div>
        </div>
      </section>
      <MovieSearch 
        searchQuery={searchQuery} 
        triggerSearch={triggerSearch} 
        yearMin={yearMin}
        yearMax={yearMax}
      />
    </div>
  );
}

export default Search;
