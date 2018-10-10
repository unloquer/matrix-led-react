import React, { Component } from 'react';
import '../css/componentes.css';

import Matrix from './Matrix';
import Footer from './Footer';
import Request from './Request';

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
    this.connection = new WebSocket('ws://'+document.location.host+'/ws', ['arduino']); 
    this.connection.onopen = function ()       { self.connection.send('Connect ' + new Date()); };
    this.connection.onerror = function (error) { console.log('WebSocket Error ', error);};
    this.connection.onmessage = function (e)   { console.log('Server: ', e.data);}
  }

	reciboState = (estadoLeds) => {
    if(this.connection) this.connection.send(estadoLeds.ledsState);
	}

	render = () => {

		return (
      <React.Fragment>
        <Matrix reciboState={this.reciboState}/>
        <Footer titulo='Panel de control Matrix de Leds'/>
        <Request />
      </React.Fragment>
		);
	}
};

export default Aplicacion;
