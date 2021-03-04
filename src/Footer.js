import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';
import MovieIcon from './icons/MovieIcon.js';
import SeatIcon from './icons/SeatIcon.js';
import TicketIcon from './icons/TicketIcon.js';
const Footer = (props) => {
  // change color icons footer -> to know on which page it is
  const location = useLocation();
  return (
    <div className="footer">
      <div className="iconText">
        <MovieIcon
          className={`iconsFooter ${
            location.pathname.includes('detail') ? 'active' : ''
          }`}
        />
        <p
          className={`footerText ${
            location.pathname.includes('detail') ? 'active' : ''
          }`}
        >
          movies
        </p>
      </div>

      <div className="iconText">
        <SeatIcon
          className={`iconsFooter ${
            location.pathname.includes('booking') ? 'active' : ''
          }`}
        />
        <p
          className={`footerText ${
            location.pathname.includes('booking') ? 'active' : ''
          }`}
        >
          seats
        </p>
      </div>

      <div className="iconText">
        <TicketIcon
          className={`iconsFooter ${
            location.pathname.includes('ticket') ? 'active' : ''
          }`}
        />
        <p
          className={`footerText ${
            location.pathname.includes('ticket') ? 'active' : ''
          }`}
        >
          tickets
        </p>
      </div>
    </div>
  );
};

export default Footer;
