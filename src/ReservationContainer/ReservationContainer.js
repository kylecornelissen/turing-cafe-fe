import React from 'react';
import Reservation from '../Reservation/Reservation.js';
import './ReservationContainer.css'

const ReservationContainer = ({reservations, removeReservation}) => {
  reservations = reservations.reverse().map(reservation => {
    return (
      <Reservation
        key={reservation.id}
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        num={reservation.number}
        removeReservation={removeReservation}
      />
    )
  })
  return (
    <div className='reservations-container'>
      {reservations}
    </div>
  )
}

export default ReservationContainer;
