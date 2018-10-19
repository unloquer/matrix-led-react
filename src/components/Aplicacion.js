import React, { Component } from 'react';
import '../css/componentes.css';

import FlechaDerecha from './FlechaDerecha';
import FlechaIzquierda from './FlechaIzquierda';
import Matrix from './Matrix';
import {alertas} from '../alertas';
class Aplicacion extends Component {

  constructor(){
    super();

    this.connection = null;

    this.state = {
      alertas: alertas,
      currentIndex:0,
      translateValue: 0,
    }
  }

  componentWillMount(){
    this.setState(prevState =>{
      alertas: prevState.alertas
    })
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

  mandoColorsocket = () => {
    console.log('mando color por socket');
  }

	reciboStateLeds = (estadoLeds) => {
    //if(this.connection) this.connection.send(estadoLeds.ledsState);
  }
  
  irAlaAnterior = () => {
    if(this.state.currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideHeight()
    }));

    this.actualizoVista();
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

    this.actualizoVista();
  }

  actualizoVista = () =>{
    const vistaActual = this.state.currentIndex;
  }

  slideHeight = () => {
    return document.querySelector('#Matrix').clientHeight
  }

	render = () => {

		return (
      <div className="slider">
        <div className="slider-wrapper" style={{
          transform: `translateY(${this.state.translateValue}px)`,
          transition: 'transform ease-out 0.45s'
        }}>
          {this.state.alertas.map( (alerta,i) => (
            <Matrix 
              reciboStateLeds={this.reciboStateLeds} 
              key={i} 
              alerta={alerta}/>
          ))}
        </div>
        {/*<Footer titulo='Panel de control Matrix de Leds'/>*/}
        <FlechaIzquierda irAlaAnterior={this.irAlaAnterior}/>
        <FlechaDerecha irAlaSiguiente={this.irAlaSiguiente}/>
      </div>
		);
	}
};

export default Aplicacion;
