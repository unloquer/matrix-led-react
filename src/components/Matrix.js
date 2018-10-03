import React,{Component} from 'react';
import Led from './Led';
import '../css/componentes.css';
import {arrayLeds} from '../arrayLeds2';
import * as R from 'ramda';

class Matrix extends Component{

  constructor(){
    super();
    this.state = {
      ledsState: new Array(64).fill(0)
    }
  }

  reciboEstadoLed = (keyid,estadoled) => {
    this.setState({ ledsState: R.update(keyid, estadoled, this.state.ledsState) })
    this.props.reciboState( {ledsState: R.update(keyid, estadoled, this.state.ledsState)} );
  }

  pintoLeds = () => {
    return (
      Object.keys(arrayLeds).map((key,idx) => (
        <Led
          key={idx}
          keyid={idx}
          reciboEstadoLed={this.reciboEstadoLed}
        />
      ))
    )
  }

  render(){
    return (
      <div id="Matrix">
        {this.pintoLeds()}
      </div>
    )
  }
}

export default Matrix;
