import React,{Component} from 'react';

import Led from './Led';

import '../css/componentes.css';
import {arrayLeds} from '../arrayLeds2';
import * as R from 'ramda';

class Matrix extends Component{

  constructor(props){
    super(props);
    this.state = {
      ledsState: new Array(64).fill(0)
    }
  }

  reciboEstadoLed = (keyid,estadoled) => {
    const alerta = this.props.alerta;
    this.setState({ ledsState: R.update(keyid, estadoled, this.state.ledsState) })

    //console.log(this.state.ledsState)
    //this.props.reciboStateLeds( {ledsState: R.update(keyid, estadoled, this.state.ledsState)} );
    
    const matrixEstado ={
      ledsState: R.update(keyid, estadoled, this.state.ledsState),
      idMatrix: alerta
    }
    this.props.reciboStateLeds(matrixEstado);
  }



  pintoLeds = () => {
    return (
      Object.keys(arrayLeds).map((key,idx) => (
        <Led
          key={idx}
          keyid={idx}
          reciboEstadoLed={this.reciboEstadoLed}
          alerta={this.props.alerta}
        />
      ))
    )
  }

  render(){
    return (
      <div className="Matrix">
        {this.pintoLeds()}
      </div>
    )
  }
}

export default Matrix;