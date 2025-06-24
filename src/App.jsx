import React, { useState } from 'react'
import Search from './components/search';
import { useEffect } from 'react';
import Spinner from './components/spinner';
import Moviecard from './components/Moviecard';
import {useDebounce} from 'react-use'
import { getTrendingMovies, updateSearchCount } from './appwrite';

const  App = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [genreList, setgenreList] = useState(new Map());
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");

  useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm])

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const BASE_URL = "https://api.themoviedb.org/3";

  const REQUEST_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const API_OPTIONS = {
    method:"GET",
    headers:{
      accept:"application/json",
      Authorization: `Bearer ${API_KEY}`
    }
  };

  const GENRE_URL = "https://api.themoviedb.org/3/genre/movie/list";

  async function fetchData(query = ""){
    setIsLoading(true);
    setErrorMessage("");

    const url = query ? `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : REQUEST_URL

    try{
      const movieResponse = await fetch(url, API_OPTIONS);
      const genreResponse = await fetch(GENRE_URL, API_OPTIONS);

      if(!movieResponse.ok){
        throw new Error("There was an error fetching movies");
      };

      if(!genreResponse.ok){
        throw new Error("There was an error getting genres");
      };

      const movieData = await movieResponse.json();
      const genreData = await genreResponse.json();

      console.log(movieData)

      if (!movieData.results){
        setErrorMessage("Error parsing the data")
        return;
      };

      const genreMap = new Map();
      genreData.genres.forEach((genre) => {
        genreMap.set(genre.id, genre.name);
      });

      setMovieList(movieData.results);
      setgenreList(genreMap);

      if(query && movieData.results){
        await updateSearchCount(query, movieData.results[0])
      }
    }
    catch(e){
      alert("There was an error fetching movies: " +e)
      setErrorMessage(e.message)
    }
    finally{
      setIsLoading(false)
    }
  };

  async function loadMovies() {
    try{
      const movies = await getTrendingMovies();

      setTrendingMovies(movies)
    }catch(e){

    }
  };

  useEffect(
    () => {
      fetchData(debounceSearchTerm);
    }, [debounceSearchTerm],
  );

  useEffect(() => {
    loadMovies();
  }, [],);
  

  return (
    <main>
      <div className='pattern' />

      <div className='wrapper'>
        <header>
          <img src='./hero.png'></img>
          <h1>Find <span className='text-gradient'>Movies</span> Without Any Hassle</h1>
          <Search searchTerm ={searchTerm} setsearchTerm = {setsearchTerm}/>
        </header>

        {trendingMovies.length > 0 && (
          <section className="trending">
            <h2>Trending Movies</h2>

            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_data} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className='all-movies'>
          <h2>Popular Movies</h2>
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className='errorMessage'>{errorMessage}</p>
          ) : (genreList.size > 0 &&
            <ul>
              {movieList.map((movie) => (
                <li key={movie.id}>
                  <Moviecard movie={movie} genre={genreList}/>
                </li>
              ))}
            </ul>
          )}

        </section>
      </div>
    </main>
  )
}

export default App