import React,{Component} from 'react';
import Led from './Led';
import '../css/componentes.css';
import {arrayLeds} from '../arrayLeds2';
import * as R from 'ramda';

class Matrix extends Component{

  constructor(){
    super();
    this.state = {
      ledsState: new Array(64)
    }
  }

  reciboEstadoLed = (keyid,estadoled) => {
    //console.log("este es el estado y key de cada led:", estadoled);
    // TRABAJAR AQUI

    this.setState({ ledsState: R.update(keyid, estadoled, this.state.ledsState) })
    this.props.reciboState( {ledsState: R.update(keyid, estadoled, this.state.ledsState)} );
  }

  pintoLeds = () => {
    // Nos devuelve cada objeto de la metrix de objetos
    // luego le asignamos un key con map
    return (
      Object.keys(arrayLeds).map((key,idx) => (
        <Led
          key={idx}
          keyid={idx}
          reciboEstadoLed={this.reciboEstadoLed}
          arrayLeds={arrayLeds}
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
