import React from 'react';
import '../App.css';

class DateComponent extends React.Component {
    constructor(props) {
      super(props);
  
      let today = new Date(),
      date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
  
      this.state = {
        date: date,
        time: new Date()
      };
    }
  
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
  
      tick() {
        this.setState({
          time: new Date()
        });
      }
  
    render() {
      return <div className="date">
        <h1>Date & time</h1>
        <p>Date: {this.state.date}</p>
        <p>Time: {this.state.time.toLocaleTimeString()}</p>
      </div>
    }
  }
  export default DateComponent;