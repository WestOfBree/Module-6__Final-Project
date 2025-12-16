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
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [userQuery, setUserQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);


  const fetchResults = async (query) => {
  
    if (!query) {
      return;
      // fetchResults aborted: empty query
    }

    setLoading(true);
    console.log(
      "fetchResults started (userQuery)",
      userQuery,
      "loading",
      loading
    );
    setError("");
    try {
      const apiKey = "29e531e2";
      //for when no api key is provided
      if (!apiKey) {
        setResults([]);
        setError(
          "API key is missing. Please set REACT_APP_OMDB_API_KEY in your environment."
        );
        return;
      }
      setSearchResults = await fetch(
        `https://www.omdbapi.com/?apikey=29e531e2&s=${userQuery}`

      );
      console.log(searchResults);
      // for when the fetch fails
      if (!searchResults.ok) {
        setResults([]);
        console.log(searchResults);
        setError(`Error: ${searchResults.status} ${searchResults.statusText}`);
        return;
      }
      const results = await searchResults.json();
      const allResults = results.Search || [];
      // for when no results are found
      if (Array.isArray(allResults) && allResults.length > 0) {
        setResults(allResults);
        setError("");
        // fetchResults was successful!
        console.log("fetchResults successful (allResults)", allResults);
      } else {
        setResults([]);
        setError("No movies found. Please try a different search.");
      }
    } catch (err) {
      setResults([]);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
      console.log(
        "fetchResults ended (userQuery)",
        userQuery,
        "loading",
        loading
      );
    }
  };

    const handleSearch = () => {
      fetchResults(userQuery);
    };

  const onChange = (event) => {
    setUserQuery(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    fetchResults(userQuery);
    localStorage.setItem("userQuery", userQuery);
    // <Link to="/Results" state={{ userQuery: userQuery }} />
    navigate(`/Results`);
    console.log("onFormSubmit ran (userQuery)", userQuery);
  };
  useEffect(() => {
    const storedQuery = localStorage.getItem("userQuery");
    if (storedQuery) {
      setUserQuery(storedQuery);
      fetchResults(storedQuery);
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
              fetchResults={fetchResults}
              onChange={onChange}
              onFormSubmit={onFormSubmit}
              setUserQuery={setUserQuery}
              handleSearch={handleSearch}
              results={results}
            />
          }
        />
        <Route
          path="/Results"
          movieData={moviesData}
          fetchResults={fetchResults}
          results={results}
          onChange={onChange}
          onFormSubmit={onFormSubmit}
          setUserQuery={setUserQuery}
          onSearch={handleSearch}
          loading={loading}
          setLoading={setLoading}
          element={<Results />}
        />
      </Routes>
      <Footer />
    </div>
    // </Router>
  );
}

export default App;
