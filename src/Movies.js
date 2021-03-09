import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';

const Movies = ({ movies }) => {
  return (
    <ul className="movies-moviePosters">
      {movies.map((movie) => (
        <li className="movies-poster" Key={movie.id}>
          <Link to={`/detail/${movie.id}`} style={{ textDecoration: 'none' }}>
            <img className="movies-imgPoster" src={movie.urlImage} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Movies;
