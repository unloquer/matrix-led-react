import React, { Component } from 'react';
import '../css/componentes.css';

class Led extends Component {
  // keyid viene del key que le asigna el map cuando es usado el componente
  constructor({keyid}){
    super();

    this.coloresLeds = [
      "",
      ""
    ];

    this.state = {
      keyLed :keyid,
      color: 0,
      alerta:''
    }

  }

  componentDidMount(){
    this.fijoColores()
  }

  // con esta función tomo la alerta que entra y la asigno como color a cada matrix 
  fijoColores = () => {
    const alertas = this.props.alerta;

    //imprimo el estado de la matrix con su alerta
    this.setState({
      alerta:alertas
    })

    if( (this.state.keyLed <= 63) && (alertas === 'rojo') ) 
    {
      this.coloresLeds[0] = 'transparente';
      this.coloresLeds[1] = 'rojo';
    }
    else if(  (this.state.keyLed <= 63) && (alertas === 'verde') )
    {
      this.coloresLeds[0] = 'transparente';
      this.coloresLeds[1] = 'verde';
    }
    else if(  (this.state.keyLed <= 63) && (alertas === 'amarillo') )
    {
      this.coloresLeds[0] = 'transparente';
      this.coloresLeds[1] = 'amarillo';
    }
    else if(  (this.state.keyLed <= 63) && (alertas === 'naranja') )
    {
      this.coloresLeds[0] = 'transparente';
      this.coloresLeds[1] = 'naranja';
    }
    else if(  (this.state.keyLed <= 63) && (alertas === 'violeta') )
    {
      this.coloresLeds[0] = 'transparente';
      this.coloresLeds[1] = 'violeta';
    }
  }

  // esta función toma las alertas que entran y llena un array de color para cada matrix

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
      color: ( estadoActualLed + 1 ) % this.coloresLeds.length
    });
    this.envioEstado(estadoActualLed);
  }

  render(){
    const estado = this.coloresLeds[this.state.color];
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
