import './App.css';
import {connect} from 'react-redux';
import React, { Component } from 'react';
import Calendar from './components/Calendar'
import * as actions from './actions/actions'

const mapStateToProps = (state) => ({
  days: state.calendar.days 
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: serverData => dispatch(actions.fetchData(serverData))
})


class App extends Component {
    constructor(props) {
      super(props)
    };
  
    componentDidMount() {
        let data = 'http://slack-server-production.us-west-2.elasticbeanstalk.com/calendar/PTRI/2';
      fetch('http://slack-server-production.us-west-2.elasticbeanstalk.com/calendar/PTRI/2')
          .then(response => response.json())
          .then(data => this.props.fetchData(data));
    }

  render() {
    return (
      <div className="App">
        <Calendar days={this.props.days}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
//,


// class Calendar {
//   //do something with the data here
//   constructor(schedule) {
//     this.data = schedule;
//     this.days = [];
//   }
// }

// class Event {
//   constructor(data) {
//     this.startTime = data.startTime;
//     this.endTime = data.endTime;
//     this.description = data.description;
//   }
// }

// class Day {
//   constructor(name) {
//     this.name = name;
//     this.events = [];
//     this.addEvent = (eventData) => {
//       this.events.push(new Event(eventData));
//     }
//     this.orderEvents = () => {
//       //go through events and sort them by start and end time
//     }
//   }
// }

// class Week {
//   constructor(number) {
//     this.days = [];
//     this.addDay = (name) => {
//       const day = new Day(name);
//       this.days.push(day);
//     }
//   }
// }
