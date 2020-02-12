import React, {Component} from 'react';
import Reservation from '../Reservation/Reservation.js';
import './ReservationContainer.css'

class ReservationContainer extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    };
  }
  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(reservations => this.setState({ reservations }))
      .catch(error => console.log(error))
  }
  render() {
    let {reservations} = this.state;
    reservations = reservations.reverse().map(reservation => {
      return (
        <Reservation
          key={reservation.id}
          name={reservation.name}
          date={reservation.date}
          time={reservation.time}
          num={reservation.number}
        />
      )
    })
    return (
      <div className='reservations-container'>
        {reservations}
      </div>
    )
  }
}

export default ReservationContainer;
