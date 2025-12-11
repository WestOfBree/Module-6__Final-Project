import './App.css';
import React from 'react';
import Home from './pages/Home.jsx';
import Nav from './components/Nav.jsx';
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Results from './pages/Results.jsx';
import Module from './components/Module.jsx';
import Footer from './components/Footer.jsx';



function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleModule = () => {
    setIsOpen(!isOpen);
  };

  let movie;
let moviesData = [];
let isMenuOpen = false;
let loading = document.getElementById('loading-screen');
const searchInput = document.querySelector(".search--input");
const movieCard = document.querySelector(".results__container");
const form = document.querySelector(".search-bar");
const sliderBar = document.querySelector("#results__slider--input");
const sliderCurrent = document.querySelector("#results__slider--current");
let debounceTimeout;
const query = localStorage.getItem("query");
// async function onSearchChange(event) {
//   const q = event.target.value?.trim();
//   if (!q) return;
//   localStorage.setItem("query", q);
//   render(q);
// }




// SMALL SCREEN MENU FUNCTION



// function toggleMenu(){
    
    
//     if (isMenuOpen){
//         isMenuOpen = false;
//         return document.body.classList.remove("menu--open")
//     }
//      isMenuOpen = !isMenuOpen;
//     document.body.classList +=" menu--open";
// }


  return (
    <Router>
    <div className="App">
      <Nav toggleModule={toggleModule} isOpen={isOpen} />
      <Routes> <Route path="/" element={<Home />} />
        <Route path="/Results" movieData={moviesData} element={<Results />} />
      </Routes>
      <Footer />  
    </div>
    </Router>
  );
}

export default App;
