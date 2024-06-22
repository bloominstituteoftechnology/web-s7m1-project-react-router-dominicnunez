import React from 'react';

const MovieCard = ({ title, director, metascore, actors, onMovieClick }) => {
  return (
    <div className="movie-card" onClick={onMovieClick}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      {actors && (
        <div className="movie-actors">
          <h3>Actors</h3>
            {actors.map((actor, index) => (
              <div key={index}>{actor}</div>
            ))}
        </div>
      )}
    </div>
  );
};

export default MovieCard;
