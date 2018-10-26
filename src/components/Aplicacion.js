import React, { Component } from 'react';
import '../css/componentes.css';

import FlechaDerecha from './FlechaDerecha';
import FlechaIzquierda from './FlechaIzquierda';
import Matrix from './Matrix';
import EnvioAlerta from './EnvioAlerta';

import {alertas} from '../alertas';

class Aplicacion extends Component {

  constructor(){
    super();

    this.connection = null;

    this.state = {
      alertas:alertas,
      currentIndex:0,
      translateValue: 0,
      matrices: [0,0,0,0,0]
    }
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
    const matrix0 = this.state.matrices[0];
    const matrix1 = this.state.matrices[1];
    const matrix2 = this.state.matrices[2];
    const matrix3 = this.state.matrices[3];

    if(this.connection){
      // this.connection.send(estadoLeds.ledsState);
     }  

    this.setState({
      matrices: estadoLeds.ledsState
    })
  }

  //this.envioAlertas(estadoLeds.ledsState);

  irAlaAnterior = () => {
    if(this.state.currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideHeight()
    }));
  }

  irAlaSiguiente = () => {
    // si nos salimos del total de images, entonces volvemos a cero
    if(this.state.currentIndex === this.state.alertas.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideHeight())
    }));
  }

  slideHeight = () => {
    return document.querySelector('.Matrix').clientHeight
  }

	render = () => {
    
		return (

      <div className="slider">
        <div className="slider-wrapper" style={{
          transform: `translateY(${this.state.translateValue}px)`,
          transition: 'transform ease-out 0.45s'
        }}>
          {alertas.map( (alerta,i) => (
            <Matrix 
              reciboStateLeds={this.reciboStateLeds} 
              key={i} 
              alerta={alerta}
            />
          ))}
        </div>
        
        <FlechaIzquierda irAlaAnterior={this.irAlaAnterior}/>
        <EnvioAlerta 
          envioAlertas={this.envioAlertas}
        />
        <FlechaDerecha irAlaSiguiente={this.irAlaSiguiente}/>
      </div>
		);
	}
};

export default Aplicacion;
