import React from "react";
import landingImg from "../assets/undraw_movie.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/ui/SearchBar";


function Home( { handleSearch, userQuery, setUserQuery, onChange, onFormSubmit,  } ) {
    const navigate = useNavigate();

    return (
        <div className="row">
            <div className="landing__container container">
                <h1 className="section__title"><span className="color-text">Your next movie is just a click away!</span></h1>
                <h2 className="section__sub-title">What are you<span className="color-text"> waiting </span>for?</h2>
                <div className="search--container">
                     <SearchBar 
                        userQuery={userQuery} 
                        onFormSubmit={onFormSubmit} 
                        setUserQuery={setUserQuery}
                        handleSearch={handleSearch}
                    />
                </div>
                <figure className="landing__img--wrapper">
                    <img src={landingImg} alt="" className="landing__img" />
                </figure>
            </div>
        </div>
    
    );
}

export default Home;