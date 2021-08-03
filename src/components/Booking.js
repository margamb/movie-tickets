import React, { useState } from 'react';
import IconReset from '../icons/IconReset';
import Seats from './Seats';
import './Booking.css';
import movieApi from '../movieAPI';
import { Link } from 'react-router-dom';

const Booking = ({
  numOfSeats = 48,
  selected,
  setSelected,
  movies,
  selectedTime,
  setSelectedTime,
  handleReset,
}) => {
  //Generate Seats
  const seatsId = [...Array(numOfSeats).keys()];
  const occupiedSeats = [45, 46, 33, 34];
  const [seats] = useState(seatsId);
  const [occupied] = useState(occupiedSeats);

  const handleSelected = (ev) => {
    const id = parseInt(ev.target.id);
    const selectedIndex = selected.findIndex((currentId) => currentId === id);
    if (selectedIndex === -1) {
      selected.push(id);
    } else {
      selected.splice(selectedIndex, 1);
    }
    setSelected([...selected]);
  };

  const chooseTime = (time) => {
    setSelectedTime(time);
  };

  const isButtonActive = selectedTime && selected.length > 0;

  return (
    <div className="booking">
      <Link to="/" style={{ textDecoration: 'none' }} onClick={handleReset}>
        <IconReset />
      </Link>
      <p className="booking-movie-title">{movies.movieTitle}</p>
      <ul className="booking-seats-options">
        <li className="booking-seat-information">
          <div className="booking-seat"></div>
          <p className="booking-text-options">Avaliable</p>
        </li>

        <li className="booking-seat-information">
          <div className="booking-seat selected"></div>
          <p className="booking-text-options">Selected</p>
        </li>

        <li className="booking-seat-information">
          <div className="booking-seat occupied"></div>
          <p className="booking-text-options">Occupied</p>
        </li>
      </ul>
      <div className="booking-screen"></div>
      <p className="booking-screen-text">screen</p>

      <div onClick={handleSelected}>
        <Seats seats={seats} occupied={occupied} selected={selected} />
      </div>

      <div className="booking-schedules">
        <p className="booking-schedules-day">{movieApi[0].date}</p>
        <ul className="booking-schedules-info">
          {movies.schedules?.map((schedule) => (
            <li key={schedule}
              className={`booking-schedules-hours ${
                selectedTime === schedule ? 'active-hours' : ''
              }`}
              onClick={() => chooseTime(schedule)}
            >
              {schedule}
            </li>
          ))}
        </ul>
      </div>

      <Link to={`/ticket/${movies.id}`}>
        <button
          className={`booking-btn-pay ${
            isButtonActive ? 'booking-btn-pay-active' : ''
          }`}
        >
          Pay ticket
        </button>
      </Link>
    </div>
  );
};

export default Booking;
