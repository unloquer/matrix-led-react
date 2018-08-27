import React, { Component } from 'react';
import './componentes.css';
import Matrix from './Matrix';


class Aplicacion extends Component { 

	constructor(props){
		super(props);
		this.state = {
			leds : []
		};
	}  

	componentDidMount(){
		this.setState({
			leds : [ 
				{nombre: "led 1", f:2, c:1, color: "whiteButton"},
				{nombre: "led 2", f:3, c:1, color: "greenButton"},
				{nombre: "led 3", f:4, c:1, color: "blueButton"},
				{nombre: "led 4", f:1, c:1, color: "blackButton"},
				{nombre: "led 5", f:1, c:2, color: "greenButton"},
				{nombre: "led 6", f:1, c:2, color: "blackButton"}, 
				{nombre: "led 7", f:1, c:2, color: "whiteButton"}, 
				{nombre: "led 8", f:1, c:2, color: "greenButton"},  
			  ]
		})
	}

	render = () => {
		return (
          	<Matrix leds={this.state.leds}> </Matrix> 
		);
	}
};

export default Aplicacion;