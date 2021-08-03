import React from 'react';

function getClassName(isOccupied, isSelected) {
  if (isOccupied) return 'occupied'
  if (isSelected) return 'selectedSeat'

  return ''
}

const Seats = ({ seats, occupied, selected }) => {
  return (
    <div className="container-seats">
      {seats.map((id) => {
        const isOccupied = occupied.includes(id);
        const isSelected = selected.includes(id);

        return <div key={id} id={id} className={`booking-seat ${getClassName(isOccupied, isSelected)}`}></div>;
      })}
    </div>
  );
};

export default Seats;
