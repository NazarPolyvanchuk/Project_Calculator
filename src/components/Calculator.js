import React from 'react';
import '../App.css';

class Calculator extends React.Component {
    constructor(props) {
      super(props);

      let today = new Date(),
      date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

      this.state = {
        value: '',
        date: date,
        time: new Date()
      }
    }
    
    // Constants
      constants() {
        let find = this.state.value;
        let const1 = /Pi/gi;
        let const2 = /E/gi;
  
        let matches1 = find.match(const1);
        let matches2 = find.match(const2);
  
        if (matches1) {
          let result = 3.1415926536;
          this.setState({ value:  `${this.state.value} = ${result}`})
        }
        else if (matches2) {
          let result = 	2.7182818285;
          this.setState({ value:  `${this.state.value} = ${result}`})
        }
      }
    // Arifmetic operations
      multiplication() {
        let find = this.state.value;
  
        let operand = /\d+/gi;

        let regexp1 = /times/gi;
        let regexp2 = /multiply/gi;
        let regexp3 = /mul/gi;
        let regexp4 = /\*/gi;
  
        let matches_op = find.match(operand);

        let matches1 = find.match(regexp1);         
        let matches2 = find.match(regexp2);
        let matches3 = find.match(regexp3);
        let matches4 = find.match(regexp4);
  
        if (matches1) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) * parseFloat(matches_op[++i]);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        }
        else if (matches2) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) * parseFloat(matches_op[++i]);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        }
        else if (matches3) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) * parseFloat(matches_op[++i]);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        }
        else if (matches4) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) * parseFloat(matches_op[++i]);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        }
        else if (matches_op) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) * parseFloat(matches_op[++i]);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        }
      }
  
      division() {
        let find = this.state.value;
  
        let operand = /\d+/gi;

        let regexp1 = /divide/gi;
        let regexp2 = /divide by/gi;
        let regexp3 = /\//gi;

        let matches_op = find.match(operand);

        let matches1 = find.match(regexp1);
        let matches2 = find.match(regexp2);
        let matches3 = find.match(regexp3);
  
        if (matches1) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) / parseFloat(matches_op[++i]);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        }
        else if (matches2) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) / parseFloat(matches_op[++i]);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        }
        else if (matches3) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) / parseFloat(matches_op[++i]);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        }
      }
  
      addition() {
        let find = this.state.value;
        
        let operand = /\d+/gi;

        let regexp1 = /add/gi;
        let regexp2 = /and/gi;
        let regexp3 = /with/gi;
        let regexp4 = /\+/gi;
  
        let matches_op = find.match(operand);

        let matches1 = find.match(regexp1);
        let matches2 = find.match(regexp2);
        let matches3 = find.match(regexp3);
        let matches4 = find.match(regexp4);
      
        if (matches1) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) + parseFloat(matches_op[++i]);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        } 
        else if (matches2) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) + parseFloat(matches_op[++i]);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        } 
        else if (matches3) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) + parseFloat(matches_op[++i]);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        } 
        else if (matches4) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) + parseFloat(matches_op[++i]);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        }
      }
  
      subtraction() {
        let find = this.state.value;
        
        let operand = /\d+/gi;

        let regexp1 = /minus/gi;
        let regexp2 = /subtract/gi;
        let regexp3 = /without/gi;
        let regexp4 = /\-/gi;

        let matches_op = find.match(operand);

        let matches1 = find.match(regexp1);
        let matches2 = find.match(regexp2);
        let matches3 = find.match(regexp3);
        let matches4 = find.match(regexp4);
      
        if (matches1) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) - parseFloat(matches_op[++i]);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        } 
        else if (matches2) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) - parseFloat(matches_op[++i]);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        } 
        else if (matches3) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) - parseFloat(matches_op[++i]);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        } 
        else if (matches4) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) - parseFloat(matches_op[++i]);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        }
      }
  
      mod() {
        let find = this.state.value;
  
        let operand = /\d+/gi;
        let regexp = /mod/gi;

        let matches_op = find.match(operand)
        let matches = find.match(regexp);
        
  
        if (matches) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) % parseFloat(matches_op[++i]);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        } 
      }
  
      exponent() {
        let find = this.state.value;
  
        let operand = /\d+/gi;
        let regexp = /\^/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
  
        if (matches) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) ** parseFloat(matches_op[++i]);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        } 
      }
  
      // Percentage operations
      percent_value() {
        let find = this.state.value;
  
        let operand = /\d+/gi;
        let regexp = /\% of/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
  
        if (matches) { 
          for (let i = 0; i < matches_op.length; i++) {
            let result = (parseFloat(matches_op[i])/100) * parseFloat(matches_op[++i]);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        }
      }
  
      add_percent() {
        let find = this.state.value;
  
        let operand = /\d+/gi;
        let regexp = /\% add/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
  
        if (matches) {
          let result = ((parseFloat(matches_op[0])/100) * parseFloat(matches_op[1])) + parseFloat(matches_op[1]); 
          this.setState({ value:  `${this.state.value} = ${result}`})
        } 
      }
  
      sub_percent() {
        let find = this.state.value;
  
        let operand = /\d+/gi;
        let regexp = /\% sub/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
  
        if (matches) {
          let result = (parseFloat(matches_op[1]) - (parseFloat(matches_op[0])/100) * parseFloat(matches_op[1])); 
          this.setState({ value:  `${this.state.value} = ${result}`})
        } 
      }

      // Percentage value of one value relative to another
      translation_to_percent() {
        let find = this.state.value;
  
        let operand = /\d+/gi;
        let regexp = /as a \%/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
        
  
        if (matches) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) / parseFloat(matches_op[++i]) * 100;
            result = result.toFixed(1);
            this.setState({ value:  `${this.state.value} = ${result + '%'}`})
          }
        } 
      }
     
      // Percentage addition of one value relative to another
      translation_to_percent_add() {
        let find = this.state.value;
  
        let operand = /\d+/gi;
        let regexp = /as a \% add/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
  
        if (matches) {
          for (let i = 0; i < matches_op.length; i++) {
          let result = parseFloat(matches_op[i]) / parseFloat(matches_op[++i]) * 100;
          result = result.toFixed(1);
          this.setState({ value:  `${this.state.value} = ${result + '%'}`})
          }
        } 
      }

      // Percentage subtraction of one value relative to another
      translation_to_percent_sub() {
        let find = this.state.value;
  
        let operand = /\d+/gi;
        let regexp = /as a \% sub/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
  
  
        if (matches) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[i]) / parseFloat(matches_op[++i]) * 100;
            result = result.toFixed(1);
            this.setState({ value:  `${this.state.value} = ${result + '%'}`})
          }
        } 
      }
  
      value_by_percent() {
        let find = this.state.value;
  
        let operand = /d+/gi;
        let regexp = /\% of what is/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
  
        if (matches) {
          for (let i = 0; i < matches_op.length; i++) {
            let result = parseFloat(matches_op[++i]) * (100 / parseFloat(matches_op[i]));
            result = result.toFixed(1);
            this.setState({ value:  `${this.state.value} = ${result}`})
          }
        } 
      }
  
      // Trigonometrical functions
      sqrt() {
        let find = this.state.value;
  
        let regexp = /sqrt/gi;
        let operand = /\d+/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
        parseFloat(matches_op);
  
        if (matches) {
          let result = Math.sqrt(...matches_op);
          result = result.toFixed(3);
          this.setState({ value:  `${this.state.value} = ${result}`}); 
        } 
      }
  
      cbrt() {
        let find = this.state.value;
  
        let regexp = /cbrt/gi;
        let operand = /\d+/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
        parseFloat(matches_op);
  
        if (matches) {
          let result = Math.cbrt(...matches_op);
          result = result.toFixed(3);
          this.setState({ value:  `${this.state.value} = ${result}`}); 
        } 
      }
  
      abs() {
        let find = this.state.value;
  
        let regexp = /abs/gi;
        let operand = /\d+/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
        parseFloat(matches_op);
  
        if (matches) {
          let result = Math.abs(...matches_op);
          result = result.toFixed(3);
          this.setState({ value:  `${this.state.value} = ${result}`}); 
        }
      }
  
      log() {
        let find = this.state.value;
  
        let regexp = /log/gi;
        let operand = /\d+/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
        parseFloat(matches_op);
  
        if (matches) {
          let result = Math.log(...matches_op);
          result = result.toFixed(3);
          this.setState({ value:  `${this.state.value} = ${result}`}); 
        } 
      }
  
      ln() {
        let find = this.state.value;
  
        let regexp = /ln/gi;
        let operand = /\d+/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
        parseFloat(matches_op);
  
        if (matches) {
          let result = Math.ln(...matches_op);
          result = result.toFixed(3);
          this.setState({ value:  `${this.state.value} = ${result}`}); 
        } 
      }
  
      fact() {
        let find = this.state.value;
  
        let regexp = /fact/gi;
        let operand = /\d+/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
        parseFloat(matches_op);
  
        if (matches) {
          let result = Math.factorial(...matches_op);
          result = result.toFixed(3);
          this.setState({ value:  `${this.state.value} = ${result}`}); 
        } 
      }
  
      round() {
        let find = this.state.value;
  
        let regexp = /round/gi;
        let operand = /\d+/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
        parseFloat(matches_op);
  
        if (matches) {
          let result = Math.round(...matches_op);
          result = result.toFixed(3);
          this.setState({ value:  `${this.state.value} = ${result}`}); 
        } 
      }
  
      ceil() {
        let find = this.state.value;
  
        let regexp = /ceil/gi;
        let operand = /\d+/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
        parseFloat(matches_op);
  
        if (matches) {
          let result = Math.ceil(...matches_op);
          result = result.toFixed(3);
          this.setState({ value:  `${this.state.value} = ${result}`}); 
        } 
      }
  
      floor() {
        let find = this.state.value;
  
        let regexp = /floor/gi;
        let operand = /\d+/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
        parseFloat(matches_op);
  
        if (matches) {
          let result = Math.floor(...matches_op);
          result = result.toFixed(3);
          this.setState({ value:  `${this.state.value} = ${result}`}); 
        } 
      }
  
      sin() {
        let find = this.state.value;
  
        let regexp = /sin/gi;
        let operand = /\d+/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
        parseFloat(matches_op);
  
        if (matches) {
          let result = (Math.sin(...matches_op) * 180) / Math.PI;
          result = result.toFixed(3);
          this.setState({ value:  `${this.state.value} = ${result}`}); 
        } 
      }
  
      cos() {
        let find = this.state.value;
  
        let regexp = /cos/gi;
        let operand = /\d+/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
        parseFloat(matches_op);
  
        if (matches) {
          let result = Math.cos(...matches_op);
          result = result.toFixed(3);
          this.setState({ value:  `${this.state.value} = ${result}`}); 
        } 
      }
  
      tan() {
        let find = this.state.value;
  
        let regexp = /tan/gi;
        let operand = /\d+/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
        parseFloat(matches_op);
  
        if (matches) {
          let result = Math.tan(...matches_op);
          result = result.toFixed(3);
          this.setState({ value:  `${this.state.value} = ${result}`}); 
        } 
      }
  
      arcsin() {
        let find = this.state.value;
  
        let regexp = /arcsin/gi;
        let operand = /\d+/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
        parseFloat(matches_op);
  
        if (matches) {
          let result = Math.arcsin(...matches_op);
          result = result.toFixed(3);
          this.setState({ value:  `${this.state.value} = ${result}`}); 
        }
      }
  
      arccos() {
        let find = this.state.value;
  
        let regexp = /arccos/gi;
        let operand = /\d+/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
        parseFloat(matches_op);
  
        if (matches) {
          let result = Math.arccos(...matches_op);
          result = result.toFixed(3);
          this.setState({ value:  `${this.state.value} = ${result}`}); 
        } 
      }
  
      arctan() {
        let find = this.state.value;
  
        let regexp = /arctan/gi;
        let operand = /\d+/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
        parseFloat(matches_op);
  
        if (matches) {
          let result = Math.arctan(...matches_op);
          result = result.toFixed(3);
          this.setState({ value:  `${this.state.value} = ${result}`}); 
        } 
      }
  
      sinh() {
        let find = this.state.value;
  
        let regexp = /sinh/gi;
        let operand = /\d+/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
        parseFloat(matches_op);
  
        if (matches) {
          let result = Math.sinh(...matches_op);
          result = result.toFixed(3);
          this.setState({ value:  `${this.state.value} = ${result}`}); 
        } 
      }
  
      cosh() {
        let find = this.state.value;
  
        let regexp = /cosh/gi;
        let operand = /\d+/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
        parseFloat(matches_op);
  
        if (matches) {
          let result = Math.cosh(...matches_op);
          result = result.toFixed(3);
          this.setState({ value:  `${this.state.value} = ${result}`}); 
        } 
      }
  
      tanh() {
        let find = this.state.value;
  
        let regexp = /tanh/gi;
        let operand = /\d+/gi;
  
        let matches = find.match(regexp);
        let matches_op = find.match(operand);
        parseFloat(matches_op);
  
        if (matches) {
          let result = Math.tanh(...matches_op);
          result = result.toFixed(3);
          this.setState({ value:  `${this.state.value} = ${result}`}); 
        } 
      }
  
      // Temperature
      temperature() {
        let find = this.state.value;
  
        let operand1 = /\d+ celsius/gi;
        let operand2 = /\d+ kelvin/gi;
        let operand3 = /\d+ fahrenheit/gi;
  
        let regexp1 = /in kelvin/gi;
        let regexp2 = /in celsius/gi;
        let regexp3 = /in fahrenheit/gi;
  
        let matches_op_1 = find.match(operand1);
        let matches_op_2 = find.match(operand2);
        let matches_op_3 = find.match(operand3);
  
        let matches1 = find.match(regexp1);
        let matches2 = find.match(regexp2);
        let matches3 = find.match(regexp3);
  
        if (matches_op_1 && matches1) {
          let result = parseFloat(matches_op_1) + 273.15;
          result = result.toFixed(1);
          this.setState({ value:  `${this.state.value} = ${result + 'K'}`})
        }
        else if (matches_op_1 && matches3) {
          let result = parseFloat(matches_op_1) * 1.8 + 32;
          result = result.toFixed(1);
          this.setState({ value:  `${this.state.value} = ${result + 'F°'}`})
        }
        else if (matches_op_2 && matches2) {
          let result = parseFloat(matches_op_2) - 273.15;
          result = result.toFixed(1);
          this.setState({ value:  `${this.state.value} = ${result + 'C°'}`})
        }
        else if (matches_op_2 && matches3) {
          let result = parseFloat(matches_op_2) * 1.8 - 459.67;
          result = result.toFixed(1);
          this.setState({ value:  `${this.state.value} = ${result + 'F°'}`})
        }
        else if (matches_op_3 && matches1) {
          let result = (parseFloat(matches_op_3) + 459.67) / 1.8;
          result = result.toFixed(1);
          this.setState({ value:  `${this.state.value} = ${result + 'K'}`})
        }
        else if (matches_op_3 && matches2) {
          let result = (parseFloat(matches_op_3) - 32) / 1.8;
          result = result.toFixed(1);
          this.setState({ value:  `${this.state.value} = ${result + 'C°'}`})
        } 
      }
  
      // Weight
      weight() {
        let find = this.state.value;
  
        let operand1 = /\d+ gram/gi;
        let operand2 = /\d+ kilogram/gi;
        let operand3 = /\d+ centner/gi;
        let operand4 = /\d+ pound/gi;
        let operand5 = /\d+ tonne/gi;
  
        let regexp1 = /to gram/gi;
        let regexp2 = /to kilogram/gi;
        let regexp3 = /to centner/gi;
        let regexp4 = /to pound/gi;
        let regexp5 = /to tonne/gi;
  
        let matches_op_1 = find.match(operand1);
        let matches_op_2 = find.match(operand2);
        let matches_op_3 = find.match(operand3);
        let matches_op_4 = find.match(operand4);
        let matches_op_5 = find.match(operand5);
  
        let matches1 = find.match(regexp1);
        let matches2 = find.match(regexp2);
        let matches3 = find.match(regexp3);
        let matches4 = find.match(regexp4);
        let matches5 = find.match(regexp5);
  
        if (matches_op_1 && matches2) {
          let result = parseFloat(matches_op_1) / 1000;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'kg'}`})
        }
        else if (matches_op_1 && matches3) {
          let result = parseFloat(matches_op_1) / 100000;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'ct'}`})
        }
        else if (matches_op_1 && matches4) {
          let result = parseFloat(matches_op_1) / 453.59237;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'lb'}`})
        }
        else if (matches_op_1 && matches5) {
          let result = parseFloat(matches_op_1) / 1000000;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 't'}`})
        }
        else if (matches_op_2 && matches1) {
          let result = parseFloat(matches_op_2) * 1000;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'g'}`})
        }
        else if (matches_op_2 && matches3) {
          let result = parseFloat(matches_op_2) * 100000;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'ct'}`})
        }
        else if (matches_op_2 && matches4) {
          let result = parseFloat(matches_op_2) * 0.45359237;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'lb'}`})
        }
        else if (matches_op_2 && matches5) {
          let result = parseFloat(matches_op_2) * 0.001;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 't'}`})
        }
        else if (matches_op_3 && matches1) {
          let result = parseFloat(matches_op_3) * 100000;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'g'}`})
        }
        else if (matches_op_3 && matches2) {
          let result = parseFloat(matches_op_3) * 1000;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'kg'}`})
        }
        else if (matches_op_3 && matches4) {
          let result = parseFloat(matches_op_3) * 220.462262;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'lb'}`})
        }
        else if (matches_op_3 && matches5) {
          let result = parseFloat(matches_op_3) * 0.1;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 't'}`})
        }
        else if (matches_op_4 && matches1) {
          let result = parseFloat(matches_op_4) * 453.59237;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'g'}`})
        }
        else if (matches_op_4 && matches2) {
          let result = parseFloat(matches_op_4) *  0.45359237;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'kg'}`})
        }
        else if (matches_op_4 && matches3) {
          let result = parseFloat(matches_op_4) /  220.462262;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'ct'}`})
        }
        else if (matches_op_4 && matches5) {
          let result = parseFloat(matches_op_4) *  0.00045359237;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 't'}`})
        }
        else if (matches_op_5 && matches1) {
          let result = parseFloat(matches_op_5) * 1000000;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'g'}`})
        }
        else if (matches_op_5 && matches2) {
          let result = parseFloat(matches_op_5) / 0.001;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'kg'}`})
          debugger
        }
        else if (matches_op_5 && matches3) {
          let result = parseFloat(matches_op_5) * 10;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'ct'}`})
        }
        else if (matches_op_5 && matches4) {
          let result = parseFloat(matches_op_5) * 2204.62262;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'lb'}`})
        }
      }
        
      // Lenght
      lenght() {
        let find = this.state.value;
  
        let operand1 = /\d+ meter/gi;
        let operand2 = /\d+ kilometer/gi;
        let operand3 = /\d+ mile/gi;
        let operand4 = /\d+ inch/gi;
        let operand5 = /\d+ yard/gi;
  
        let regexp1 = /to meter/gi;
        let regexp2 = /to kilometer/gi;
        let regexp3 = /to mile/gi;
        let regexp4 = /to inch/gi;
        let regexp5 = /to yard/gi;
  
        let matches_op_1 = find.match(operand1);
        let matches_op_2 = find.match(operand2);
        let matches_op_3 = find.match(operand3);
        let matches_op_4 = find.match(operand4);
        let matches_op_5 = find.match(operand5);
  
        let matches1 = find.match(regexp1);
        let matches2 = find.match(regexp2);
        let matches3 = find.match(regexp3);
        let matches4 = find.match(regexp4);
        let matches5 = find.match(regexp5);

        if (matches_op_1 && matches2) {
          let result = parseFloat(matches_op_1) * 0.001;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'km'}`})
        }
        else if (matches_op_1 && matches3) {
          let result = parseFloat(matches_op_1) * 0.000621371192;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'mi'}`})
        }
        else if (matches_op_1 && matches4) {
          let result = parseFloat(matches_op_1) * 39.3700787;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'in'}`})
        }
        else if (matches_op_1 && matches5) {
          let result = parseFloat(matches_op_1) * 1.0936133;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'yd'}`})
        }
        else if (matches_op_2 && matches1) {
          let result = parseFloat(matches_op_2) / 1000;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'm'}`})
        }
        else if (matches_op_2 && matches3) {
          let result = parseFloat(matches_op_2) * 0.6;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'mi'}`})
        }
        else if (matches_op_2 && matches4) {
          let result = parseFloat(matches_op_2) * 39370.0787;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'in'}`})
        }
        else if (matches_op_2 && matches5) {
          let result = parseFloat(matches_op_2) * 1093.6133;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'yd'}`})
        }
        else if (matches_op_3 && matches1) {
          let result = parseFloat(matches_op_3) * 1609.344;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'm'}`})
        }
        else if (matches_op_3 && matches2) {
          let result = parseFloat(matches_op_3) * 1.609344;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'km'}`})
        }
        else if (matches_op_3 && matches4) {
          let result = parseFloat(matches_op_3) * 63360;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'in'}`})
        }
        else if (matches_op_3 && matches5) {
          let result = parseFloat(matches_op_3) * 1760;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'yd'}`})
        }
        else if (matches_op_4 && matches1) {
          let result = parseFloat(matches_op_4) * 0.0254;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'm'}`})
        }
        else if (matches_op_4 && matches2) {
          let result = parseFloat(matches_op_4) * 0.00002540000;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'km'}`})
        }
        else if (matches_op_4 && matches3) {
          let result = parseFloat(matches_op_4) * 0.000015782828282828283;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'mi'}`})
        }
        else if (matches_op_4 && matches5) {
          let result = parseFloat(matches_op_4) * 0.0277777778;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'yd'}`})
        }
        else if (matches_op_5 && matches1) {
          let result = parseFloat(matches_op_5) * 0.9144;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'm'}`})
        }
        else if (matches_op_5 && matches2) {
          let result = parseFloat(matches_op_5) * 0.0009144;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'km'}`})
        }
        else if (matches_op_5 && matches3) {
          let result = parseFloat(matches_op_5) * 0.000568181818;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'mi'}`})
        }
        else if (matches_op_5 && matches4) {
          let result = parseFloat(matches_op_5) * 36;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'in'}`})
        }
      }

      //Data
      data() {
        let find = this.state.value;
  
        let operand1 = /\d+ kilobyte/gi;
        let operand2 = /\d+ megabyte/gi;
        let operand3 = /\d+ gigabyte/gi;
        let operand4 = /\d+ terabyte/gi;
  
        let regexp1 = /to kilobyte/gi;
        let regexp2 = /to megabyte/gi;
        let regexp3 = /to gigabyte/gi;
        let regexp4 = /to terabyte/gi;
  
        let matches_op_1 = find.match(operand1);
        let matches_op_2 = find.match(operand2);
        let matches_op_3 = find.match(operand3);
        let matches_op_4 = find.match(operand4);
  
        let matches1 = find.match(regexp1);
        let matches2 = find.match(regexp2);
        let matches3 = find.match(regexp3);
        let matches4 = find.match(regexp4);

        if (matches_op_1 && matches2) {
          let result = parseFloat(matches_op_1) * 0.001;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'Mb'}`})
        }
        else if (matches_op_1 && matches3) {
          let result = parseFloat(matches_op_1) * 0.0000001;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'Gb'}`})
        }
        else if (matches_op_1 && matches4) {
          let result = parseFloat(matches_op_1) * 0.0000000010;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'Tb'}`})
        }
        else if (matches_op_2 && matches1) {
          let result = parseFloat(matches_op_2) * 1000;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'Kb'}`})
        }
        else if (matches_op_2 && matches3) {
          let result = parseFloat(matches_op_2) * 0.001;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'Gb'}`})
        }
        else if (matches_op_2 && matches4) {
          let result = parseFloat(matches_op_2) * 0.000001;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'Tb'}`})
        }
        else if (matches_op_3 && matches1) {
          let result = parseFloat(matches_op_3) * 1000000;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'Kb'}`})
        }
        else if (matches_op_3 && matches2) {
          let result = parseFloat(matches_op_3) * 1000;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'Mb'}`})
        }
        else if (matches_op_3 && matches4) {
          let result = parseFloat(matches_op_3) * 0.001;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'Tb'}`})
        }
        else if (matches_op_4 && matches1) {
          let result = parseFloat(matches_op_4) * 1000000000
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'Kb'}`})
        }
        else if (matches_op_4 && matches2) {
          let result = parseFloat(matches_op_4) * 1000000;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'Mb'}`})
        }
        else if (matches_op_4 && matches3) {
          let result = parseFloat(matches_op_4) * 1000;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'Gb'}`})
        }
      }

      //Area 
      area() {
        let find = this.state.value;
  
        let operand1 = /\d+ acre/gi;
        let operand2 = /\d+ are/gi;
        let operand3 = /\d+ hectare/gi;
  
        let regexp1 = /to acre/gi;
        let regexp2 = /to are/gi;
        let regexp3 = /to hectare/gi;
  
        let matches_op_1 = find.match(operand1);
        let matches_op_2 = find.match(operand2);
        let matches_op_3 = find.match(operand3);
  
        let matches1 = find.match(regexp1);
        let matches2 = find.match(regexp2);
        let matches3 = find.match(regexp3);

        if (matches_op_1 && matches2) {
          let result = parseFloat(matches_op_1) * 40.468564224;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'a'}`})
        }
        else if (matches_op_1 && matches3) {
          let result = parseFloat(matches_op_1) * 0.404685642;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'ha'}`})
        }
        else if (matches_op_2 && matches1) {
          let result = parseFloat(matches_op_2) * 0.0247105381;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'ac'}`})
        }
        else if (matches_op_2 && matches3) {
          let result = parseFloat(matches_op_2) * 0.01;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'ha'}`})
        }
        else if (matches_op_3 && matches1) {
          let result = parseFloat(matches_op_3) * 2.47105381;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'ac'}`})
        }
        else if (matches_op_3 && matches2) {
          let result = parseFloat(matches_op_3) * 100;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'a'}`})
        }
      }

      //CSS
      css() {
        let find = this.state.value;
  
        let operand1 = /\d+ pixels/gi;
        let operand2 = /\d+ points/gi;
        let operand3 = /\d+ em/gi;
  
        let regexp1 = /to pixels/gi;
        let regexp2 = /to points/gi;
        let regexp3 = /to em/gi;
  
        let matches_op_1 = find.match(operand1);
        let matches_op_2 = find.match(operand2);
        let matches_op_3 = find.match(operand3);
  
        let matches1 = find.match(regexp1);
        let matches2 = find.match(regexp2);
        let matches3 = find.match(regexp3);

        if (matches_op_1 && matches2) {
          let result = parseFloat(matches_op_1) * 0.75;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'pt'}`})
        }
        else if (matches_op_1 && matches3) {
          let result = parseFloat(matches_op_1) * 0.0625;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'em'}`})
        }
        else if (matches_op_2 && matches1) {
          let result = parseFloat(matches_op_2) * 1.333333;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'px'}`})
        }
        else if (matches_op_2 && matches3) {
          let result = parseFloat(matches_op_2) * 0.083645834169792;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'em'}`})
        }
        else if (matches_op_3 && matches1) {
          let result = parseFloat(matches_op_3) * 	0.0625;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'px'}`})
        }
        else if (matches_op_3 && matches2) {
          let result = parseFloat(matches_op_3) * 11.18704933687;
          result = result.toFixed(2);
          this.setState({ value:  `${this.state.value} = ${result + 'pt'}`})
        }
      }
  
      // Currency convertor
      currencyConvertor() {
        let find = this.state.value;
  
        let operand1 = /\d+USD/gi;
        let operand2 = /\d+EUR/gi;
        let operand3 = /\d+UAH/gi;
  
        let regexp1 = /in UAH/gi;
        let regexp2 = /in EUR/gi;
        let regexp3 = /in USD/gi;
  
        let matches_op_1 = find.match(operand1);
        let matches_op_2 = find.match(operand2);
        let matches_op_3 = find.match(operand3);
  
        let matches1 = find.match(regexp1);
        let matches2 = find.match(regexp2);
        let matches3 = find.match(regexp3);
        
        if (matches_op_1 && matches1) {
          let result = parseFloat(matches_op_1) * 25.5;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'UAH'}`})
        }
        else if (matches_op_1 && matches2) {
          let result = parseFloat(matches_op_1) / 1.1;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'EUR'}`})
        }
        else if (matches_op_2 && matches1) {
          let result = parseFloat(matches_op_2) * 28.5;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'UAH'}`})
        }
        else if (matches_op_2 && matches3) {
          let result = parseFloat(matches_op_2) * 1.1;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'USD'}`})
        }
        else if (matches_op_3 && matches2) {
          let result = parseFloat(matches_op_3) / 28.5;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'EUR'}`})
        }
        else if (matches_op_3 && matches3) {
          let result = parseFloat(matches_op_3) / 25.5;
          result = result.toFixed(2)
          this.setState({ value:  `${this.state.value} = ${result + 'USD'}`})
        } 
      }

      // Date
      date() {
        let find = this.state.value;
        
        let regexp1 = /date now/gi;
        let regexp2 = /today date/gi;
        let regexp3 = /today/gi;

        let matches1 = find.match(regexp1);
        let matches2 = find.match(regexp2);
        let matches3 = find.match(regexp3);

        if (matches1) {
          let result = `${this.state.date}`;
          parseFloat(result);
          this.setState({ value:  `${this.state.value} = ${result}`})
        }

        else if (matches2) {
          let result = `${this.state.date}`;
          parseFloat(result);
          this.setState({ value:  `${this.state.value} = ${result}`})
        }
        else if (matches3) {
          let result = `${this.state.date}`;
          parseFloat(result);
          this.setState({ value:  `${this.state.value} = ${result}`})
        }
      }

      // Time
      time() {
        let find = this.state.value;

        let regexp1 = /time now/gi;

        let matches1 = find.match(regexp1);

        if (matches1) {
          let result = `${this.state.time.toLocaleTimeString()}`;
          parseFloat(result);
          this.setState({ value:  `${this.state.value} = ${result}`})
        }
      }
      
      showResult() {
        // Constants
          this.constants()

        // Arifmetic operations
          this.multiplication()
          this.division()
          this.addition()
          this.subtraction()
          
          this.mod()
          this.exponent()

        // Trigonometrical functions
          this.sqrt()
          this.cbrt()
          this.abs()
          this.log()
          this.ln()
          this.fact()
          this.round()
          this.ceil()
          this.floor()
          this.sin()
          this.cos()
          this.tan()
          this.arcsin()
          this.arccos()
          this.arctan()
          this.sinh()
          this.cosh()
          this.tanh()

        // Percentage operations
          this.percent_value()
          this.add_percent()
          this.sub_percent()
          this.translation_to_percent()
          this.translation_to_percent_add()
          this.translation_to_percent_sub()
          this.value_by_percent()

          // Temperature
          this.temperature()

          // Weight
          this.weight()

          //Lenght
          this.lenght()

          //CSS
          this.css()

          //Area
          this.area()

          //Data
          this.data()

          // Currency convertor
          this.currencyConvertor()

          // Date
          this.date()

          // Time
          this.time()
      }
    render() {
      return <div className="calculator">
        <h1>Calculator</h1>
        <textarea cols="60" rows="14"
        placeholder="Hi! This is multitask calculator, read more in Info ---->
        To get result press '='                                   
        To clear field, click Reset or press Delete" 
        value={this.state.value}
        onKeyDown={(event) => {
          let keyName = event.key;
          if ( keyName === 'Delete') {
            this.setState({value: ''})
          }
          else if (keyName === '=') {
            return (
              this.setState(this.showResult()), 
              event.preventDefault()
              )
          }
        }}
        onChange={(event) => {
          this.setState({value: event.currentTarget.value})}}>
        </textarea>
        
        <button className="btn_reset" onClick={(event) => {
          this.setState({value: ''})}}>Reset</button>
      </div>
    }
  }
  
  export default Calculator;