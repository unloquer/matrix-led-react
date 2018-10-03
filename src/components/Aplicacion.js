import React, { Component } from 'react';
import '../css/componentes.css';

import Matrix from './Matrix';
import Footer from './Footer';

class Aplicacion extends Component {

  constructor(){
    super();
    this.connection = null;
  }

  componentDidMount() {
    this.initSocket();
  }

  initSocket = () => {
    const self = this;
    this.connection = new WebSocket('ws://192.168.1.178:81/', ['arduino']);
    this.connection.onopen = function ()       { self.connection.send('Connect ' + new Date()); };
    this.connection.onerror = function (error) { console.log('WebSocket Error ', error);};
    this.connection.onmessage = function (e)   { console.log('Server: ', e.data);}
  }

	reciboState = (estadoLeds) => {
    if(this.connection) this.connection.send(estadoLeds.ledsState);
	}

	render = () => {
    console.log(this.state)
		return (
      <React.Fragment>
        <Matrix reciboState={this.reciboState}/>
        <Footer titulo='Panel de control Matrix de Leds'/>
      </React.Fragment>
		);
	}
};

export default Aplicacion;
