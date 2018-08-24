import React, { Component } from 'react';
import './componentes.css';

const colores = [ 
  "blackButton",
  "whiteButton",
  "greenButton",
  "blueButton",
  "redButton" 
];


/*
const colores = [ 
	{f:1, c:1, color: "blackButton"},
	{f:2, c:1, color: "whiteButton"},
	{f:3, c:1, color: "greenButton"},
	{f:4, c:1, color: "blueButton"},
	{f:1, c:2, color: "greenButton"},
	{f:1, c:2, color: "blackButton"}, 
	{f:1, c:2, color: "whiteButton"}, 
	{f:1, c:2, color: "greenButton"},  
  ];
 */

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
        const clases = `botones ${estado}`;

		return (
				<div className="envLed"> 
					<p className={clases} onClick={this.changeColor}> Led </p> 
				</div>
		);
	}
};

export default Led;