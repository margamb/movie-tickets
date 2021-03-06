import React from 'react';
import './MovieDetails.css';
import IconReset from './icons/IconReset.js';
import { Link } from 'react-router-dom';
// import ScrollToTop from './ScrollToTop.js';

const MovieDetails = ({ movies }) => {
  return (
    <div className="movieInfo">
      {/* <ScrollToTop /> */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <IconReset />
      </Link>
      <img className="poster1" src={movies.urlImage} />
      <h1 className="titleMovie">{movies.movieTitle}</h1>
      <div className="infoDetails">
        <p className="overview">{movies.overview}</p>
        <p className="priceTicket">${movies.price}</p>
        <div className="timetable">
          <p className="dateDetails">{movies.date}</p>
          <ul className="time-hours">
            {movies.schedules?.map((schedule) => (
              <li className="hours">{schedule}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link
        className="link-book-ticket"
        to={`/booking/${movies.id}`}
        style={{ textDecoration: 'none' }}
      >
        <button className="btn-book-ticket">Book Ticket</button>
      </Link>
    </div>
  );
};

export default MovieDetails;
