import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard'

export default function MovieList(props) {
  const navigate = useNavigate();
  // Defines a function that returns a new function to navigate to a specific movie page
  // The returned function captures the 'id' parameter, which is the ID of the movie that was clicked
  // This allows the 'onMovieClick' function to be passed as a prop to the 'MovieDetails' component
  // and have access to the correct 'id' value when the movie card is clicked
  const onMovieClick = id => () => {
    navigate(`movies/${id}`);
  };

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails onMovieClick={onMovieClick(movie.id)} key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { onMovieClick } = props
  const { title, director, metascore } = props.movie;

  return (
    <MovieCard 
    title={title}
    director={director}
    metascore={metascore}
    onMovieClick={onMovieClick}
    />
  );
}
