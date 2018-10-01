import React, { Component } from 'react';
import '../css/componentes.css';
import Matrix from './Matrix';
//import { enviarSocket } from '../socket';

class Aplicacion extends Component {


  constructor(){
    super();
    this.connection = null;
  }

  componentDidMount() {
    this.initSocket();
  }

  initSocket = async () => {
    const self = this;
    this.connection = await new WebSocket('ws://192.168.1.178:81/', ['arduino']);
    this.connection.onopen = function ()       { self.connection.send('Connect ' + new Date()); };
    this.connection.onerror = function (error) { console.log('WebSocket Error ', error);};
    this.connection.onmessage = function (e)   { console.log('Server: ', e.data);}

  }

	reciboState = (estadoLeds) => {
		//console.log("en aplicacion");
		//console.log(estadoLeds.ledsState);
    if(this.connection) this.connection.send(estadoLeds.ledsState);
		//enviarSocket(estadoLeds.ledsState);
	}

	render = () => {
    console.log(this.state)
		return (
      <Matrix reciboState={this.reciboState}/>
		);
	}
};

export default Aplicacion;
