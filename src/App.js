/* https://casesandberg.github.io/react-color/ */

import React, { Component } from 'react';
import Matrix from './components/Matrix'
import './App.css';

/*
const colores = [ 
  "blackButton",
  "whiteButton",
  "greenButton",
  "blueButton",
  "redButton" 
];

*/
class App extends Component {
/*
  constructor(){
    super();
    this.state = { color: 0 }; 
  }

  changeColor = () => {
    this.setState({ color: (this.state.color + 1) % colores.length })
  }
*/
  render(){
    
    /*let state = colores[this.state.color];*/

    return (
      <div className="App">
          <Matrix> </Matrix>
      </div>
    );

    /*console.log(colores);*/
  }

}

export default App;