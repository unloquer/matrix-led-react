import React, { Component } from 'react';
import '../css/componentes.css';

// creo este array porque cada led recorrer este array para cambiar de color
/*
const coloresLeds = [
  "verde",
  "verdeluminoso",
  "verdemilitar",
  "amarillo",
  "amarillopollo",
  "naranja",
  "naranjaoscuro",
  "cafe",
  "gris",
  "grisclaro",
  "azul",
  "azulclaro",
  "azuloscuro",
  "cyan",
  "azulverdoso",
  "rojo"
];
*/

const coloresLeds = [
  "transparente",
  "gris"
];

class Led extends Component {
  // keyid viene del key que le asigna el map cuando es usado el componente
  constructor({keyid}){
    super();
    this.state = {
      keyLed :keyid,
      color: 0
    }
  }

  componentDidMount(){
    let estadocolor = this.state.color;
    const {keyid} = this.props;

    // si en el state color al iniciar esta null, lo llenamos con el arraydeleds
    if(estadocolor.color === undefined){

    this.setState({
      color: this.props.arrayLeds[this.state.keyLed].color
    })

    this.props.reciboEstadoLed(keyid, this.state.color);
   }
   

  }

  envioEstado = estadoled => {
    // guardo el key que viene del map
    const {keyid} = this.props;
    // y se lo envío al componente padre (Matrix) como prop
    this.props.reciboEstadoLed(keyid, estadoled);

    //console.log(estadoAppLed);
    //console.log("id" + keyid );
    //console.log("estadoLed" + estadoled);
  }

  changeColor = () => {
    let estadoActualLed = this.state.color;
    // recorro el array cuando se hace click
    this.setState({ color: ( estadoActualLed  + 1 ) % coloresLeds.length });
    // envio el state a envioEstado
    this.envioEstado(estadoActualLed);
  }

  render(){

    //console.log(this.props.arrayLeds[this.state.keyLed].color);

    const estado = coloresLeds[this.state.color];
    const cambio = `botones bordercirculo ${estado}`;
    //const coloresDefault = Object.keys(this.props.colores);

    //console.log( coloresDefault.map(i => { i }) );

    return (
      //let nombre = this.props.leds;
      <div className="envLed">
        <p className={cambio} onClick={this.changeColor}></p>
      </div>
    )
  }
};

export default Led;
