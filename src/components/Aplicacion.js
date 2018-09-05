import React, { Component } from 'react';
import '../css/componentes.css';
import Matrix from './Matrix';

class Aplicacion extends Component {
	/*
	constructor(){
		super();
		this.state = {
			leds : []
		};
	}
	*/
	render = () => {
		return (
      <Matrix/>
		);
	}
};

export default Aplicacion;
