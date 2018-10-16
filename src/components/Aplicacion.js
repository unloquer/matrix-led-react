import React, { Component } from 'react';
import '../css/componentes.css';

import Matrix from './Matrix';
import Footer from './Footer';
import Request from './Request';
import Slider from './Slider';

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

	reciboStateLeds = (estadoLeds) => {
    console.log(estadoLeds)
    //if(this.connection) this.connection.send(estadoLeds.ledsState);
  }
  
  generoAlertas = (alertas) => {
    let alert = alertas;
  }

	render = () => {

		return (
      <React.Fragment>
        <Matrix reciboStateLeds={this.reciboStateLeds} inyectoAlertas={this.generoAlertas}/>
        <div className="panelControl">
          <Request />
          <Slider 
            generoAlertas={this.generoAlertas}
          />
        </div>
        <Footer titulo='Panel de control Matrix de Leds'/>
      </React.Fragment>
		);
	}
};

export default Aplicacion;
