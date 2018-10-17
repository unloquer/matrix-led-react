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
    this.props.reciboStateLeds( {ledsState: R.update(keyid, estadoled, this.state.ledsState)} );
    console.log(this.state.ledsState)
  }

  pintoAlertas = () => {
    // aqui llegan las alertas
    console.log(this.props.inyectoAlertas)
    let figura = []

    if(this.props.inyectoAlertas === null)
    {
      return null;
    }
    else if(this.props.inyectoAlertas === 'verde')
    {
      figura = [1,1,1,1,0,1,0,1,0,1,
                1,1,1,1,0,1,0,1,0,1,
                1,1,1,1,0,1,0,1,0,0,
                1,1,1,1,0,1,0,1,0,0,
                1,1,1,1,0,1,0,1,0,0,
                1,1,1,1,0,1,0,1,0,0,
                1,0,1
              ]
              
      this.setState({
        ledsState: figura
      })
      
    }
    
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