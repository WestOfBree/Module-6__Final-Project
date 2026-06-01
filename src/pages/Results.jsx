import React from "react";
import headerImg from "../assets/movie-face-on-a-poster.jpg";
import Movies from "../components/Movies.jsx";
import { useEffect, useMemo, useState } from "react";
import SearchBar from "../components/ui/SearchBar.jsx";
// import { useNavigate as navigate } from "react-router-dom";

function Results({ fetchResults, onChange, onFormSubmit, loading, setLoading, onSearch, userQuery, setUserQuery, error, results }) {
  // const location = useLocation();
  // const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState(null);

  const parseMovieYear = (movie) => {
    const rawYear = movie?.Year || movie?.year;
    if (typeof rawYear !== "string") {
      return null;
    }

    const match = rawYear.match(/\d{4}/);
    if (!match) {
      return null;
    }

    const parsed = Number(match[0]);
    return Number.isNaN(parsed) ? null : parsed;
  };

  window.addEventListener("beforeunload", () => {
    localStorage.removeItem("userQuery");
  });

  const allYears = useMemo(() => {
    if (!Array.isArray(results)) {
      return [];
    }

    const parsedYears = results
      .map((r) => parseMovieYear(r))
      .filter((year) => year !== null);

    return Array.from(new Set(parsedYears)).sort((a, b) => a - b);
  }, [results]);

  const minYear = allYears.length ? allYears[0] : 0;
  const maxYear = allYears.length ? allYears[allYears.length - 1] : 0;
  const sliderYear = selectedYear ?? minYear;

  useEffect(() => {
    setSelectedYear(null);
  }, [results]);

  const filteredResults = selectedYear === null
    ? results
    : results.filter((r) => {
        const parsedYear = parseMovieYear(r);
        return parsedYear !== null && parsedYear >= selectedYear;
      });

  return (
    <div id="results__row" className="row">
      <div className="results__page--container">
        <h1 className="section__title">
          <span className="color-text">Your Movie Results Are Here!</span>
        </h1>
        <h2 className="section__sub-title">
          Enjoy your<span className="color-text"> movie </span>time!
        </h2>
        <img
          src={headerImg}
          alt="Movie poster with face illustration"
          className="results__img"
        />
        <SearchBar
        fetchResults={fetchResults}
          userQuery={userQuery}
          onChange={onChange}
          onFormSubmit={onFormSubmit}
          setUserQuery={setUserQuery}
          onSearch={onSearch}
          error={error}
          results={results}
        />
        {Array.isArray(results) && results.length > 0 && allYears.length > 1 && (
          <div className="year-filter__container">
            <label className="year-filter__label" htmlFor="year-slider">
              Filter by Year: <span className="year-filter__value">{sliderYear === minYear ? "All" : `${sliderYear}+`}</span>
            </label>
            <input
              id="year-slider"
              className="year-filter__slider"
              type="range"
              min={minYear}
              max={maxYear}
              step={1}
              value={sliderYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
            />
            <div className="year-filter__range-labels">
              <span>{minYear}</span>
              <span>{maxYear}</span>
            </div>
          </div>
        )}
          <Movies
            userQuery={userQuery}
            results={filteredResults}
            fetchResults={fetchResults}
            loading={loading}
            error={error}
            setLoading={setLoading}
          />
        
      </div>
    </div>
  );
}

export default Results;
