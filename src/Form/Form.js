// Create a controlled form component to create a reservation
// (look into the API documentation to see what pieces of information are expected,
// and what datatypes it wants each piece to be).
// As a user types into the input fields, the component's state should change.
// When the user clicks the Make Reservation button, the application should update the App's state.
// The new reservation should display with all of the existing reservations.
import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      num: ''
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  submitReservation = (e) => {
    const {name, date, time, num} = this.state;
    const newReservation = {name, date, time, num};
    const {addReservation} = this.props;
    addReservation(newReservation);
    this.clearForm();
  }
  clearForm() {
    this.setState({name: '', date: '', time: '', num: ''});
  }
  render() {
    return (
      <form autoComplete="off">
        <h1>Create Reservation Form</h1>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
          className='name-input'
        />
        <input
          type='text'
          placeholder='Date (mm/dd)'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='How many guests?'
          name='num'
          value={this.state.num}
          onChange={event => this.handleChange(event)}
        />
        <button type="submit" onClick={(e) => this.submitReservation(e)}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
