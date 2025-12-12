import React from "react";
import headerImg from "../assets/movie-face-on-a-poster.jpg";
import Movies from "../components/Movies.jsx";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../components/ui/SearchBar.jsx";
import Footer from "../components/Footer.jsx";
// import { useNavigate as navigate } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/ui/Loading.jsx";

function Results() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [userQuery, setUserQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  window.addEventListener("beforeunload", () => {
    localStorage.removeItem("userQuery");
  });

  const fetchMovies = async (userQuery) => {
    if (!userQuery.trim()) {
      return;
    }
    setLoading(true);
    console.log(
      "fetchMovies started (userQuery)",
      userQuery,
      "loading",
      loading
    );
    setError("");
    try {
      const apiKey = "29e531e2";
      if (!apiKey) {
        setMovies([]);
        setError(
          "API key is missing. Please set REACT_APP_OMDB_API_KEY in your environment."
        );
        return;
      }
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=29e531e2&s=${userQuery}`
      );
      if (!response.ok) {
        setMovies([]);
        console.log(response);
        setError(`Error: ${response.status} ${response.statusText}`);
        return;
      }
      const data = await response.json();
      const allResults = data.Search || [];
      if (Array.isArray(allResults) && allResults.length > 0) {
        setMovies(allResults);
        setError("");
      } else {
        setMovies([]);
        setError("No movies found. Please try a different search.");
      }
    } catch (err) {
      setMovies([]);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
      console.log(
        "fetchMovies ended (userQuery)",
        userQuery,
        "loading",
        loading
      );
    }
  };

  const onChange = (e) => {
    setUserQuery(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    fetchMovies(userQuery);

    localStorage.setItem("userQuery", userQuery);
    // <Link to="/Results" state={{ userQuery: userQuery }} />
    navigate(`/Results`);
  };
  useEffect(() => {
    const storedQuery = localStorage.getItem("userQuery");
    if (storedQuery) {
      setUserQuery(storedQuery);
      fetchMovies(storedQuery);
      console.log("useEffect ran (storedQuery)", storedQuery);
    }
  }, []);
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
          userQuery={userQuery}
          onChange={onChange}
          onFormSubmit={onFormSubmit}
        />
          <Movies
            userQuery={userQuery}
            movies={movies}
            fetchMovies={fetchMovies}
            loading={loading}
            error={error}
          />
        
      </div>
    </div>
  );
}

export default Results;
