import React from 'react';
import { Link } from 'react-router-dom';
import IconReset from './icons/IconReset.js';
import SeatIcon from './icons/SeatIcon.js';
import IconCalendar from './icons/IconCalendar.js';
import IconClock from './icons/IconClock.js';
import IconMoney from './icons/IconMoney.js';

import './Ticket.css';

function getClassName(letter) {
  let className = 'code ';

  if (letter === 'a') {
    className += 'code-1';
  } else if (letter === 'e') {
    className += 'code-4';
  } else if (letter === 'i') {
    className += 'code-5';
  } else if (letter === 'o') {
    className += 'code-2';
  } else if (letter === 'u') {
    className += 'code-6';
  } else {
    className += 'code-3';
  }

  return className;
}

const Ticket = ({ handleReset, movies, selected, selectedTime }) => {
  const seatsSelected = selected.length;
  const seatsPrice = seatsSelected * movies.price;

  const movieTitle = movies.movieTitle.split('');

  return (
    <div className="ticket">
      <Link to="/" style={{ textDecoration: 'none' }} onClick={handleReset}>
        <IconReset />
      </Link>
      <div className="ticket-detail loading">
        {/* loading */}
        <p className="my-ticket">My tickets</p>
        <div className="ticket-poster-square">
          <img className="ticket-poster-movie" src={movies.urlImage} />
        </div>
        <div className="tickets-details-movies">
          <h1 className="ticket-title-movie">{movies.movieTitle}</h1>
          <div className="ticket-book-details">
            <div className="ticket-book-clock">
              <IconClock className="ticket-seat-icon" />
              <p className="ticket-seats">{selectedTime}</p>
            </div>
            <div className="ticket-book-calendar">
              <IconCalendar className="ticket-seat-icon" />
              <p className="ticket-seats">{movies.date}</p>
            </div>
            <div className="ticket-book-money">
              <IconMoney className="ticket-seat-icon" />
              <p className="ticket-seats">${seatsPrice}</p>
            </div>

            <div className="ticket-book-seat">
              <SeatIcon className="ticket-seat-icon" />
              <p className="ticket-seats">{`${selected}`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bar-code loading">
        {movieTitle.map((letter) => {
          const className = getClassName(letter);
          return (
            <div className={className}></div>
            //   <div className="code"></div>
          );
        })}
      </div>
    </div>
  );
};

export default Ticket;
