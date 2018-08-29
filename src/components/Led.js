import React, { Component } from 'react';
import './componentes.css';

const coloresLeds = [
	"whiteButton",
	"greenButton",
	"blueButton",
	"blackButton",
	"greenButton",
	"blackButton", 
	"whiteButton", 
	"greenButton"
];

class Led extends Component { 
	
	constructor(){
		super();
		this.state = {
			color: 0
		}
	  }
	  
  	envioEstado = () => {
  		console.log("hola");
  	}

  	changeColor = () => {
		this.setState({ color: (this.state.color + 1) % coloresLeds.length });
		//console.log("posicion: "+this.state.color);
		
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