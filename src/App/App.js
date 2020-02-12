import React, { Component } from 'react';
import './App.css';
import ReservationContainer from '../ReservationContainer/ReservationContainer.js';
import Form from '../Form/Form.js';

class App extends Component {
  addReservation(newReservation) {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        name: newReservation.name,
        date: newReservation.date,
        time: newReservation.time,
        number: newReservation.num
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('http://localhost:3001/api/v1/reservations', options)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <ReservationContainer />
        </div>
      </div>
    )
  }
}

export default App;
