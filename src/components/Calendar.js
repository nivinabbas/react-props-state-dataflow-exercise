import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div id="calendar">
        {this.props.reservations.name} has a reservation on{' '}
        {this.props.reservations.day} @ {this.props.reservations.time}
      </div>
    );
  }
}

export default Calendar;
