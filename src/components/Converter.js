import React from 'react';
import '../App.css';

class Converter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeCurrencyFrom: 'usd',
        activeCurrencyTo: 'uah',
        value: ''
      }
    }
  
    converting (value) {
      let summ = 0;
      const usd = 25.5;
      const euro = 28.5;
      const euroToUsd = 1.1;
      if (this.state.activeCurrencyFrom === 'usd' && this.state.activeCurrencyTo === 'uah') {
        return (
          summ = usd * value,
          summ = summ.toFixed(2),
          summ + '₴'
          );
      }
      else if (this.state.activeCurrencyFrom === 'euro' && this.state.activeCurrencyTo === 'uah') {
        return (
          summ = euro * value,
          summ = summ.toFixed(2),
          summ + '₴'
          );
      }
      else if (this.state.activeCurrencyFrom === 'uah' && this.state.activeCurrencyTo === 'usd') {
        return (
          summ = value / usd,
          summ = summ.toFixed(2),
          summ + '$'
          );
      }
      else if (this.state.activeCurrencyFrom === 'uah' && this.state.activeCurrencyTo === 'euro') {
        return (
          summ = value / euro,
          summ = summ.toFixed(2),
          summ + '€'
          );
      }
      else if (this.state.activeCurrencyFrom === 'usd' && this.state.activeCurrencyTo === 'euro') {
        return (
          summ = value / euroToUsd,
          summ = summ.toFixed(2),
          summ + '€'
          );
      }
      else if (this.state.activeCurrencyFrom === 'euro' && this.state.activeCurrencyTo === 'usd') {
        return (
          summ = value * euroToUsd,
          summ = summ.toFixed(2),
          summ + '$'
          );
      }
      else if (this.state.activeCurrencyFrom === 'usd' && this.state.activeCurrencyTo === 'usd') {
        return (
          alert('Please select different currency'),
          summ = 0 + '$'
          );
      }
      else if (this.state.activeCurrencyFrom === 'euro' && this.state.activeCurrencyTo === 'euro') {
        return (
          alert('Please select different currency'),
          summ = 0 + '€'
          );
      }
      else if (this.state.activeCurrencyFrom === 'uah' && this.state.activeCurrencyTo === 'uah') {
        return (
          alert('Please select different currency'),
          summ = 0 + '₴'
          );
      }
    }
  
    render() {
      return <form className="units">
            <h1>Converter currency</h1>
            <section className="converter">
              <div>
                <label for="convert-from">From:</label>
                <select id="convert-from" 
                onChange={(event) => {
                  this.setState({activeCurrencyFrom: event.currentTarget.value })
                }}>
                  <option value="usd" selected>$</option>
                  <option value="euro">€</option>
                  <option value="uah">₴</option>
                </select>
              </div>
  
              <input type="number" min="0" 
              className="input_value"
              value={this.state.value}
              name="value"
              placeholder="Please enter value!"
              onChange={(event) => {
                this.setState({value: event.currentTarget.value})}
              }
              />
  
              <div>
                <label for="convert-to">To:</label>
                <select id="convert-to" onChange={(event) => {
                  this.setState({activeCurrencyTo: event.currentTarget.value})
                }}>
                  <option value="usd">$</option>
                  <option value="euro">€</option>
                  <option value="uah" selected>₴</option>
                </select>
              </div>
            </section>
            <div className="result">{"Result: " + this.converting(this.state.value)} </div>
          </form>
    }
}

export default Converter;