import React from 'react';
import './App.css';
import DateComponent from './components/DateComponent';
import Converter from './components/Converter';
import Calculator from './components/Calculator';
import Popup from './components/Popup';

class Header extends React.Component {
  render() {
    return <header>
      <DateComponent />
      <Converter />
    </header>
  }
}

class Container extends React.Component {
  render() {
    return <section>
      <Calculator />
    </section>
  }
}

class App extends React.Component{
  constructor(props){  
    super(props);  
    this.state = { showPopup: false };  
  }  

  togglePopup() {  
    this.setState({  
      showPopup: !this.state.showPopup  
    });  
  }  

  render() {
    return <div className="App">
        <Header />
        <Container />
        <button className="textarea_info" onClick={this.togglePopup.bind(this)}>i</button>
        {this.state.showPopup ? <Popup closePopup={this.togglePopup.bind(this)}/> : null}  
      </div>
  }
}

export default App;
