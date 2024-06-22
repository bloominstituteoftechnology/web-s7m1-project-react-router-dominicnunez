import React from 'react';
import { useNavigate, Link } from 'react-router-dom';


export default function SavedList(props) {
  // console.log(props);
  const navigate = useNavigate();

  return (
    <div className="saved-list" style={{cursor: 'default'}}>
      <h3>Saved Movies:</h3>
      {props.list.map((movie) => (
        <span className="saved-movie" key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </span>
      ))}
      <div className="home-button" style={{cursor: 'pointer'}} onClick={() => navigate('/')}>Home</div>
    </div>
  );
}
