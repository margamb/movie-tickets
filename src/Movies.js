import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';

const Movies = ({ movies }) => {
  return (
    <ul className="moviePosters">
      {movies.map((movie) => (
        <li className="poster" Key={movie.id}>
          <Link to={`/detail/${movie.id}`} style={{ textDecoration: 'none' }}>
            <img className="imgPoster" src={movie.urlImage} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Movies;
