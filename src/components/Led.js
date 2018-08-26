import React, { Component } from 'react';
import './componentes.css';

const colores_ = [ 
	{nombre: "led 1", f:2, c:1, color: "whiteButton"},
	{nombre: "led 2", f:3, c:1, color: "greenButton"},
	{nombre: "led 3", f:4, c:1, color: "blueButton"},
	{nombre: "led 4", f:1, c:1, color: "blackButton"},
	{nombre: "led 5", f:1, c:2, color: "greenButton"},
	{nombre: "led 6", f:1, c:2, color: "blackButton"}, 
	{nombre: "led 7", f:1, c:2, color: "whiteButton"}, 
	{nombre: "led 8", f:1, c:2, color: "greenButton"},  
  ];

class Led extends Component { 

    constructor(){
    	super();
    	this.state = { color: 0 }; 
  	}

  	envioEstado = () => {
  		console.log("hola");
  	}

  	changeColor = () => {
    	this.setState({ color: (this.state.color + 1) % colores_.length });
    	console.log("posicion: "+this.state.color);
  	}
  	
	render = () => {
		const estado = colores_[this.state.color];
        const clases = `botones ${estado.color}`;

		return (
				<div className="envLed"> 
					<p className={clases} onClick={this.changeColor}> {this.name} </p> 
				</div>
		);
	}
};

export default Led;