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

  	changeColor = () => {
    	this.setState({ color: (this.state.color + 1) % colores.length })
  	}

	render(){
		let state = colores[this.state.color];
		return (
				<div className="envLed"> 
					<p className={state} onClick={this.changeColor}> Led </p> 
				</div>
		);
	}
};

export default Led;