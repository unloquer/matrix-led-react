import React, { Component } from 'react';
import '../css/componentes.css';
import Matrix from './Matrix';
import { enviarSocket } from '../socket';

class Aplicacion extends Component {

	reciboState = (estadoLeds) => {
		//console.log("en aplicacion");
		//console.log(estadoLeds.ledsState);
		enviarSocket(estadoLeds.ledsState);
	}

	render = () => {
		return (
      		<Matrix reciboState={this.reciboState}/>
		);
	}
};

export default Aplicacion;
