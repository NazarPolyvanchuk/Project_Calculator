import React from 'react';
import '../App.css';

class Popup extends React.Component {  
    render() {  
      return <div className='popup'>  
          <div className='popup\_inner'>
            <h1>You can use:</h1>  
            <div className="popup_text">
              <div className="popup_box">
                <h4>Arithmetic operations:</h4>
                <p>+, plus, and, with</p>
                <p>-, minus, subtract, without</p>
                <p>*, times, multiplied by, mul</p>
                <p>/, divide, divide by</p>
                <p>^, mod</p>
                <h4>Constants:</h4>
                <p>Pi, E</p>
                <h4>Date:</h4>
                <p>today date</p>
                <p>date now</p>
                <p>today</p>
                <h4>Time:</h4>
                <p>time now</p>
              </div>

              <div className="popup_box">
                <h4>Percentage operations:</h4>
                <p>20% of $10</p>
                <p>5% add $30</p>
                <p>6% sub 40 EUR</p>
                <p>$50 as a % $100</p>
                <p>$70 as a % add $20</p>
                <p>$20 as a % sub $70</p>
                <p>5% of what is 6 EUR</p>
              </div>

              <div className="popup_box">
                <h4>Temperature converter:</h4>
                <p>Celsius in Kelvin</p>
                <p>Celsius in Fahrenheit</p>
                <p>Fahrenheit in Kelvin</p>
                <p>Fahrenheit in Celsius</p>
                <p>Kelvin in Celsius</p>
                <p>Kelvin in Fahrenheit</p>
              </div>

              <div className="popup_box">
                <h4>Currency converter:</h4>
                <p>30 USD in UAH</p>
                <p>30 USD in EUR</p>
                <p>50 EUR in UAH</p>
                <p>50 EUR in USD</p>
                <p>2600 UAH in USD</p>
                <p>2600 UAH in EUR</p>
              </div>

              <div className="popup_box">
                <h4>Trigonometrical functions:</h4>
                <p>sqrt 16</p>
                <p>cbrt 8</p>
                <p>abs 4</p>
                <p>log 10</p>
                <p>ln 3</p>
                <p>fact 5</p>
                <p>round 3.45</p>
                <p>ceil 3.76</p>
                <p>floor 2.56</p>
                <p>sin 45°</p>
                <p>cos 3.45</p>
                <p>tan 8</p>
                <p>arcsin 30</p>
                <p>arccos 85</p>
                <p>arctan 9</p>
                <p>sinh 3</p>
                <p>cosh 9</p>
                <p>tanh 11</p>
              </div>

              <div className="popup_box">
                <h4>Weight:</h4>
                <p>gram to another weight</p>
                <p>kilogram to another weight</p>
                <p>centner to another weight</p>
                <p>pound to another weight</p>
                <p>tonne to another weight</p>
                <h4>Lenght:</h4>
                <p>meter to another lenght</p>
                <p>kilometer to another lenght</p>
                <p>mile to another lenght</p>
                <p>inch to another lenght</p>
                <p>yard to another lenght</p>
                <h4>CSS:</h4>
                <p>pixels to another css</p>
                <p>points to another css</p>
                <p>em to another css</p>
              </div>

              <div className="popup_box">
                <h4>Data:</h4>
                <p>kilobyte to another data</p>
                <p>megabyte to another data</p>
                <p>gigabyte to another data</p>
                <p>terabyte to another data</p>
                <h4>Area:</h4>
                <p>acre to another area</p>
                <p>are to another area</p>
                <p>hectare to another area</p>
              </div>
            </div>
      
            <button className="popup_button" onClick={this.props.closePopup}>Close</button>
            <p>created by Nazar Polyvanchuk</p>  
          </div>  
        </div>   
    }   
}
export default Popup;  