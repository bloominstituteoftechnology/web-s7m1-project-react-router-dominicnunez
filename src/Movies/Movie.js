import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import MovieCard from './MovieCard'
import SavedList from './SavedList';

export default function Movie(props) {
  const [movie, setMovie] = useState();

  let {id} = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/${id}`) // Study this endpoint with Postman
      .then(response => {
        setMovie(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);
   
  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <MovieCard 
      title={title}
      director={director}
      metascore={metascore}
      actors={stars}
      />
      <div className="save-button" style={{cursor: 'pointer'}} onClick={() => props.handleMovieSaves(movie)}>
        {props.saved.some(m => m.id === movie.id) ? "Remove" : "Save"}
      </div>
    </div>
  );
}
