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

function Results({ fetchResults, onChange, onFormSubmit, loading, setLoading, onSearch, userQuery, setUserQuery, error, results }) {
  // const location = useLocation();
  // const navigate = useNavigate();

  window.addEventListener("beforeunload", () => {
    localStorage.removeItem("userQuery");
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
          <Movies
            userQuery={userQuery}
            results={results}
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
