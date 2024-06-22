import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = (movie) => {
      setSaved([...saved, {id: movie.id, title: movie.title }]);
  };

  const removeFromSavedList = (movie) => {
    setSaved(saved.filter(m => m.id !== movie.id));
  };

  const handleMovieSaves = (movie) => {
    if (saved.some(m => m.id === movie.id)) {
      removeFromSavedList(movie);
    } else {
      addToSavedList(movie);
    }
   }

  return (
    <div>
      <SavedList list={saved} />

      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="movies/:id" element={<Movie saved={saved} handleMovieSaves={handleMovieSaves}/>} />
      </Routes>
    </div>
  );
}
