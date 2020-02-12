import React, {Component} from 'react';
import './Reservation.css';

class Reservation extends Component {
  constructor() {
    super();
    this.state = {
      key: '',
      name: '',
      date: '',
      time: '',
      num: ''
    }
  }
  deleteReservation(id) {
    const {removeReservation} = this.props;
    removeReservation(id);
  }
  render() {
    const {id, name, date, time, num} = this.props;
    return (
      <article className="reservation-card" key={id}>
        <h1>{name}</h1>
        <h2>{date}</h2>
        <h2>{time} pm</h2>
        <h2>Number of Guests: {num}</h2>
        <form><button type="submit" onClick={() => this.deleteReservation(id)}>Delete Reservation</button></form>
      </article>
    )
  }
}

export default Reservation;
