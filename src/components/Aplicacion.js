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
      matrices: [new Array(64),new Array(64),new Array(64),new Array(64),new Array(64)], 
      estadomatrix: new Array(64)
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
    if(this.connection)
    {
      this.connection.send(estadoLeds.ledsState);
    } 

    this.setState({
      estadomatrix: estadoLeds.ledsState
    })

  }

  actualizoMatrices = () => {

    const data = this.state.estadomatrix;
    const matrix = [...this.state.matrices];
    const actual = this.state.currentIndex;

    if( actual === 0)
    {
      matrix[0] = data;
      this.setState({ matrices: matrix });
    } 
    else if (actual === 1)
    {
      matrix[1] = data;
      this.setState({ matrices: matrix });
    }
    else if (actual === 2)
    {
      matrix[2] = data;
      this.setState({ matrices: matrix });
    }
    else if (actual === 3)
    {
      matrix[3] = data;
      this.setState({ matrices: matrix });
    }
    else if (actual === 4)
    {
      matrix[4] = data;
      this.setState({ matrices: matrix });
    }
    
    if(this.connection)
    {
      this.connection.send(matrix);
    } 
  }

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
          actualizoMatrices={this.actualizoMatrices}
        />
        <FlechaDerecha irAlaSiguiente={this.irAlaSiguiente}/>
      </div>
		);
	}
};

export default Aplicacion;
