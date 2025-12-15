import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBar({ userQuery, error, onFormSubmit, onChange, setUserQuery, onSearch }) {
  // const navigate = useNavigate();
  // const [movies, setMovies] = useState([]);
  // const [error, setError] = useState("");
  // const [, setLoading] = useState(false);
  // const [userQuery, setUserQuery] = useState("");

  // // Clears the query from localStorage when the page is unloaded to prevent stale data
  // window.addEventListener("beforeunload", () => {
  //   localStorage.removeItem("query");
  // });

  // const fetchMovies = async (userQuery) => {
  //   if (!userQuery.trim()) {
  //     return;
  //   }
  //   setLoading(true);
  //   setError("");
  //   try {
  //     const apiKey = "29e531e2";
  //     if (!apiKey) {
  //       setMovies([]);
  //       setError(
  //         "API key is missing. Please set REACT_APP_OMDB_API_KEY in your environment."
  //       );

  //       return;
  //     }
  //     const response = await fetch(
  //       `https://www.omdbapi.com/?apikey=29e531e2&s=${encodeURIComponent(
  //         userQuery
  //       )}`
  //     );
  //     if (!response.ok) {
  //       setMovies([]);
  //       setError(`Error: ${response.status} ${response.statusText}`);
  //       return;
  //     }
  //     const data = await response.json();
  //     const allResults = data.Search || [];
  //     if (Array.isArray(allResults) && allResults.length > 0) {
  //       setMovies(allResults);
  //       console.log(movies);
  //       setError("");
  //     } else {
  //       setMovies([]);
  //       setError("No movies found. Please try a different search.");
  //     }
  //   } catch (err) {
  //     setMovies([]);
  //     setError("An error occurred. Please try again later.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const onSearchChange = (e) => {
  //   setUserQuery(e.target.value);
  // };
  // const onFormSubmit = (e) => {
  //   e.preventDefault();
  //   fetchMovies(userQuery);
  //   localStorage.setItem("query", userQuery);
  //   navigate("/Results");
  // };

  return (
    <div>
      <form className="search-bar" onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="What are you in the mood for?"
          value={userQuery}
          onChange={(e) => (setUserQuery(e.target.value), console.log(e.target.value))}
          id="search--input"
        />
        <button className="search--boop click" type="submit" onClick={onSearch}>
          boop
        </button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default SearchBar;
