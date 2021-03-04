import React from 'react';
import { Link } from 'react-router-dom';
import IconReset from './icons/IconReset.js';
import './Ticket.css';

const Ticket = ({
  handleReset,
  movies,
  selected,
  seatsPrice,
  selectedTime,
}) => {
  return (
    <div className="ticket">
      <Link to="/" style={{ textDecoration: 'none' }} onClick={handleReset}>
        <IconReset />
      </Link>
      <div className="ticket-detail">
        {/* loading */}
        <p className="my-ticket">My tickets</p>
        <img className="ticket-poster-movie" src={movies.urlImage} />
        <h1>{movies.movieTitle}</h1>
        <p className="ticket-seats">Seat: {`${selected}`}</p>
        <p>Price: {seatsPrice}</p>
        <p>Time: {selectedTime}am</p>
      </div>
    </div>
  );
};

export default Ticket;
