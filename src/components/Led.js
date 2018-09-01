import React, { Component } from 'react';
import '../css/componentes.css';

// creo este array porque cada led recorrer este array para cambiar de color
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


class Led extends Component { 
	
	// keyid viene del key que le asigna el map cuando es usado el componente
	constructor({keyid}){
		super();
		this.state = {
			color: 0,
			estadoled : {}
		}
	  }
	  
  	envioEstado = estadoled => {
		// guardo el key que viene del map 
		const {keyid} = this.props;
		// y el state del componente en un objeto
		const estadoAppLed = {
			idLed : keyid,
			stdLed : estadoled
		};
		// y se lo envío al componente padre (Matrix) como prop
		this.props.reciboEstadoLed(estadoAppLed);

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
		//console.log(this.props);

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