import React, { useState, useEffect } from "react";
import axios from "axios";
import './Main.css'


//api
const api = "https://www.omdbapi.com/?";

//api key
const apiKey = "apikey=18eaeb4f";

const Main = () => {
  const [name, setName] = useState("");
  const [movies, setMovies] = useState([]);

  //pagination
  const [totalResults, setTotalResults] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState();
  const [currentPage, setCurrentPage] = useState();

  const getNumberOfPages = () => {
    if (totalResults % 10 > 0) {
      const numberOfpages = parseInt(totalResults / 10 + 1);
      setNumberOfPages(numberOfpages);
      return;
    }
    const numberOfpages = parseInt(totalResults / 10);
    setNumberOfPages(numberOfpages);
  };

  //get response from API
  const getInfo = (pageNumber) => {
    if (pageNumber) {
      axios
        .get((`${api}${apiKey}&s=${name}&type=movie&page=${pageNumber}`))
        .then((res) => {
          if (res) {
            setMovies(res.data.Search);
            setTotalResults(res.data.totalResults);
          }
        });
      return;
    }
    axios
      .get(`${api}${apiKey}&s=${name}&type=movie&page=1`)
      .then((res) => {
        if (res) {
          setMovies(res.data.Search);
          setTotalResults(res.data.totalResults);
          setCurrentPage(1);
        }
      });
  };

  //submit the title entered
  const handleSubmit = (e) => {
    e.preventDefault();
    getInfo();
  };

  //getnumberOFpageseffect
  useEffect(() => {
    getNumberOfPages();
  });

  const pages = [];

  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(
      <p key={i} onClick={(e) => goTo(i)}>
        {i}
      </p>
    );
  }

  const goTo = (pageNumber) => {
    setCurrentPage(pageNumber);
    getInfo(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <form>
        <div className='searchBar'>
          <label htmlFor='name'></label>
          <input
            type='text'
            name='name'
            placeholder='movie name'
            id='name'
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' onClick={(e) => handleSubmit(e)}>
            Search
          </button>
        </div>
      </form>

      {movies ? (
        <div className='movies'>
          {movies.map((movie) => (
            <div key={movie.imdbID} className='movie'>
              <img src={movie.Poster} alt='' />
              <div className='movie-title'>
                <p>{movie.Title}</p>
              </div>

            </div>
          ))}
        </div>
      ) : null}

      {numberOfPages ? (
        <div className='pages'>
          {/* if prev page is 0 it wont show */}
          {currentPage - 1 === 0 ? null : (
            <b onClick={(e) => goTo(currentPage - 1)}>{currentPage - 1}</b>
          )}
          <b onClick={(e) => goTo(currentPage)} className='actualPage'>
            {currentPage}
          </b>
          <b onClick={(e) => goTo(currentPage + 1)}>{currentPage + 1}</b>
        </div>
      ) : null}


    </div>

  );
};

export default Main;