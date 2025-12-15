import React from "react";
import landingImg from "../assets/undraw_movie.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/ui/SearchBar";


function Home( { handleSearch, userQuery, setUserQuery, onChange, onFormSubmit,  } ) {
    const navigate = useNavigate();

    // function onChange(event) {
    //     const searchQuery = event.target.value?.trim();
    //     if (!searchQuery) return;
    //     localStorage.setItem("userQuery", searchQuery);
    //     setUserQuery(searchQuery);
    // }

    function handleSubmit(event) {
        event.preventDefault();
        if (!userQuery) return;
        navigate("/Results", { state: { query: userQuery } });
    }
    

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
                    {/* <form className="search-bar" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="What are you in the mood for?"
                            value={userQuery}
                            onChange={onSearchChange}
                            id="search--input"
                        />
                        <button className="search--boop click" type="submit">boop</button>
                    </form> */}
                </div>
                {/* <SearchBar userQuery={userQuery} onSearchChange={onSearchChange} onSubmit={() => {redirectToResults();render(query)}} /> */}
                <figure className="landing__img--wrapper">
                    <img src={landingImg} alt="" className="landing__img" />
                </figure>
            </div>
        </div>
    
    );
}

export default Home;