import "./App.css";
import React from "react";
import Home from "./pages/Home.jsx";
import Nav from "./components/Nav.jsx";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Results from "./pages/Results.jsx";
import Module from "./components/Module.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleModule = () => {
    setIsOpen(!isOpen);
  };

  let movie;
  let moviesData = [];
  let isMenuOpen = false;
  // let loading = document.getElementById('loading-screen');
  const searchInput = document.querySelector(".search--input");
  const movieCard = document.querySelector(".results__container");
  const form = document.querySelector(".search-bar");
  const sliderBar = document.querySelector("#results__slider--input");
  const sliderCurrent = document.querySelector("#results__slider--current");
  let debounceTimeout;
  const query = localStorage.getItem("query");
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [userQuery, setUserQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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
    // <Router>
    <div className="App">
      <Nav toggleModule={toggleModule} isOpen={isOpen} />
      <Routes>
        {" "}
        <Route
          path="/"
          element={
            <Home
              fetchMovies={fetchMovies}
              onChange={onChange}
              onFormSubmit={onFormSubmit}
              setUserQuery={setUserQuery}
            />
          }
        />
        <Route
          path="/Results"
          movieData={moviesData}
          fetchMovies={fetchMovies}
          onChange={onChange}
          onFormSubmit={onFormSubmit}
          setUserQuery={setUserQuery}
          element={<Results />}
        />
      </Routes>
      <Footer />
    </div>
    // </Router>
  );
}

export default App;
