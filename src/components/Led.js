import React, { Component } from 'react';
import './componentes.css';


const colores = [ 
  "blackButton",
  "whiteButton",
  "greenButton",
  "blueButton",
  "redButton" 
];

class Led extends Component { 

    constructor(){
    	super();
    	this.state = { color: 0 }; 
  	}

  	envioEstado = () => {
  		console.log("hola")
  	}

  	changeColor = () => {
    	this.setState({ color: (this.state.color + 1) % colores.length })
    	console.log("posicion: "+this.state.color);
  	}
  	
	render = () => {
		const estado = colores[this.state.color];

		return (
				<div className="envLed"> 
					<p className={estado} onClick={this.changeColor}> Led </p> 
				</div>
		);
	}
};

export default Led;