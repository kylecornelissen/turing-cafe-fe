import React from 'react';
import './Reservation.css';

const Reservation = ({key, name, date, time, num}) => {
  return (
    <article className="reservation-card">
      <h1>{name}</h1>
      <h2>{date}</h2>
      <h2>{time} pm</h2>
      <h2>Number of Guests: {num}</h2>
    </article>
  )
}

export default Reservation;
