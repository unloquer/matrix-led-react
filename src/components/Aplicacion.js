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
      matrices: [new Array(64),new Array(64),new Array(64),new Array(64),new Array(64)]
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
    if(this.connection){
      // this.connection.send(estadoLeds.ledsState);
     } 

    this.actualizoMatrices(estadoLeds);

  }

  actualizoMatrices = (data) => {
    const matrix = [...this.state.matrices];
    
    if(data.idMatrix === 'rojo')
    {
      matrix[0] = data.ledsState;
      this.setState({ matrices: matrix });
    } 
    else if (data.idMatrix === 'verde')
    {
      matrix[1] = data.ledsState;
      this.setState({ matrices: matrix });
    }
    else if (data.idMatrix === 'amarillo')
    {
      matrix[2] = data.ledsState;
      this.setState({ matrices: matrix });
    }
    else if (data.idMatrix === 'naranja')
    {
      matrix[3] = data.ledsState;
      this.setState({ matrices: matrix });
    }
    else if (data.idMatrix === 'violeta')
    {
      matrix[4] = data.ledsState;
      this.setState({ matrices: matrix });
    }
    
    console.log(this.state.matrices);
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
          envioAlertas={this.envioAlertas}
        />
        <FlechaDerecha irAlaSiguiente={this.irAlaSiguiente}/>
      </div>
		);
	}
};

export default Aplicacion;
