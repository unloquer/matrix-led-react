import React, { Component } from 'react';
//import Leds from './Leds.js';
import './componentes.css';

class Led extends Component { 
	constructor({bombre, fila, columna, color}){
		super();
		this.state = {
			color : color
		};
  	}

  	envioEstado = () => {
  		console.log("hola");
  	}

  	changeColor = () => {
		  
		this.setState({ color: (this.state.color + 1) % 9 });
		console.log("posicion: "+this.state.color);
		
  	}
  	
	render = () => {
		/*
		const estado = COLOR[this.state.color];
		*/
		const clases = `botones ${this.state.color}`;

		//const {color} = this.state;
		//const {nombre} = this.props;
		console.log()
		return (
			//let nombre = this.props.leds;	
			<div className="envLed"> 
				<p className={clases} onClick={this.changeColor}> </p> 
			</div>
				
		)
	}
	
};

export default Led;