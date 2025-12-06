import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import stockImg from '../assets/stock_img.png';

function MovieSearch({ searchQuery, triggerSearch, yearMin, yearMax }) {
    const APIKEY = "e2ed71d6";
    const url = `https://www.omdbapi.com/?apikey=${APIKEY}&s=`;
    
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [debouncedYearMin, setDebouncedYearMin] = useState(yearMin);
    const [debouncedYearMax, setDebouncedYearMax] = useState(yearMax);

    // Debounce year changes
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedYearMin(yearMin);
            setDebouncedYearMax(yearMax);
        }, 500);

        return () => clearTimeout(timer);
    }, [yearMin, yearMax]);

    const fetchMovies = useCallback(async (textBoxValue) => {
        if (!textBoxValue || textBoxValue.trim() === "") {
            setError("Please enter a search term");
            return;
        }

        const fullUrl = url + encodeURIComponent(textBoxValue);
        setLoading(true);
        setError(null);
        
        try {
            const response = await axios.get(fullUrl);
            
            if (response.data.Response === "True") {
                // Filter movies by year range
                const filteredMovies = response.data.Search.filter((movie) => {
                    const movieYear = parseInt(movie.Year);
                    return movieYear >= debouncedYearMin && movieYear <= debouncedYearMax;
                });
                
                setMovies(filteredMovies.slice(0, 6));
                
                if (filteredMovies.length === 0) {
                    setError(`No movies found in the year range ${debouncedYearMin}-${debouncedYearMax}`);
                } else {
                    setError(null);
                }
            } else {
                setMovies([]);
                setError(response.data.Error || "No movies found");
            }
        } catch (err) {
            setError("Failed to fetch movies. Please try again.");
            setMovies([]);
            console.error("Error fetching movies:", err);
        } finally {
            setLoading(false);
        }
    }, [url, debouncedYearMin, debouncedYearMax]);

    useEffect(() => {
        if (searchQuery && triggerSearch !== undefined) {
            fetchMovies(searchQuery);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [triggerSearch, debouncedYearMin, debouncedYearMax]);

    return (
        <div id="app__container">
            {loading && <div className="loading-reel"></div>}
            
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            
            {!loading && !error && movies.length > 0 && (
                <div className="results__section">
                    <ul id="results__list">
                        {movies.map((movie) => (
                            <li key={movie.imdbID} className="result__item">
                                <Link 
                                    to={`/details?id=${movie.imdbID}`}
                                    state={{ 
                                        from: '/search', 
                                        searchQuery, 
                                        yearMin: debouncedYearMin, 
                                        yearMax: debouncedYearMax 
                                    }}
                                >
                                    <img 
                                        src={movie.Poster !== "N/A" ? movie.Poster : stockImg} 
                                        alt={movie.Title}
                                        style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                                    />
                                </Link>
                                <h3>{movie.Title}</h3>
                                <p>Year: {movie.Year}</p>
                                <p>Type: {movie.Type}</p>
                                
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default MovieSearch;