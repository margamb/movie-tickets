import React from 'react';
import './MovieDetails.css';
import IconReset from '../icons/IconReset.js';
import { Link } from 'react-router-dom';
// import ScrollToTop from './ScrollToTop.js';

const MovieDetails = ({ movies }) => {
  return (
    <div className="details-movieInfo">
      {/* <ScrollToTop /> */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <IconReset />
      </Link>
      <img className="details-poster" src={movies.urlImage} />
      <h1 className="details-title-movie">{movies.movieTitle}</h1>
      <div className="details-info-movie">
        <p className="details-overview">{movies.overview}</p>
        <p className="details-price-ticket">${movies.price}</p>
        <div className="details-timetable">
          <p className="details-date">{movies.date}</p>
          <ul className="details-time-hours">
            {movies.schedules?.map((schedule) => (
              <li className="details-hours">{schedule}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link
        className="details-link-book-ticket"
        to={`/booking/${movies.id}`}
        style={{ textDecoration: 'none' }}
      >
        <button className="details-btn-book-ticket">Book Ticket</button>
      </Link>
    </div>
  );
};

export default MovieDetails;
