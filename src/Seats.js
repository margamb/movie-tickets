import React from 'react';

const Seats = ({ seats, occupied, selected }) => {
  return (
    <div className="container-seats">
      {seats.map((id) => {
        const isOccupied = occupied.includes(id);
        const isSelected = selected.includes(id);

        const className = isOccupied
          ? 'occupied'
          : isSelected
          ? 'selectedSeat'
          : '';
        return <div id={id} className={`seat ${className}`}></div>;
      })}
    </div>
  );
};

export default Seats;
