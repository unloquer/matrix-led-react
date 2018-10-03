import React, { Component } from 'react';
import '../css/componentes.css';

const coloresLeds = [
  "rojo",
  "transparente"
];

class Led extends Component {
  // keyid viene del key que le asigna el map cuando es usado el componente
  constructor({keyid}){
    super();
    this.state = {
      keyLed :keyid,
      color: 1
    }
  }

  envioEstado = estadoled => {
    // guardo el key que viene del map
    const {keyid} = this.props;
    // y se lo envío al componente padre (Matrix) como prop
    this.props.reciboEstadoLed(keyid, estadoled);
  }

  changeColor = () => {
    let estadoActualLed = this.state.color;
    // recorro el array cuando se hace click
    this.setState({
      color: ( estadoActualLed + 1 ) % coloresLeds.length
    });
    // envio el state a envioEstado
    this.envioEstado(estadoActualLed);
  }

  render(){
    const estado = coloresLeds[this.state.color];
    const cambio = `botones ${estado}`;
    return (
      //let nombre = this.props.leds;
      <div className="envLed">
        <p className={cambio} onClick={this.changeColor}></p>
      </div>
    )
  }
};

export default Led;
