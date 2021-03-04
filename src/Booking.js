import React, { useState } from 'react';
import IconReset from './icons/IconReset';
import Seats from './Seats';
import './Booking.css';
import movieApi from './movieAPI';
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
  const [seats, setSeats] = useState(seatsId);
  const [occupied, setOccupied] = useState(occupiedSeats);

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

  return (
    <div className="booking">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <IconReset />
      </Link>
      <p className="movie-title">{movies.movieTitle}</p>
      <ul className="seats-options">
        <li className="seat-information">
          <div className="seat"></div>
          <smal className="text-options">Avaliable</smal>
        </li>

        <li className="seat-information">
          <div className="seat selected"></div>
          <smal className="text-options">Selected</smal>
        </li>

        <li className="seat-information">
          <div className="seat occupied"></div>
          <smal className="text-options">Occupied</smal>
        </li>
      </ul>
      <div className="screen"></div>
      <smal className="screen-text">screen</smal>

      <div onClick={handleSelected}>
        <Seats seats={seats} occupied={occupied} selected={selected} />
      </div>

      <div className="schedules">
        <p className="schedules-day">{movieApi[0].date}</p>
        <ul className="schedules-info">
          {movies.schedules?.map((schedule) => (
            <li
              className={`schedules-hours ${
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
        <button className="btn-pay">Pay ticket</button>
      </Link>
    </div>
  );
};

export default Booking;
