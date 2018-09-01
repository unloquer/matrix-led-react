import React,{Component} from 'react';
import Led from './Led';
import '../css/componentes.css';
import {arrayLeds} from '../arrayLeds';

class Matrix extends Component{ 
	
	constructor(){
		super();
		this.arrayLeds = arrayLeds;
	} 

	reciboEstadoLed = estadoled => {
		//console.log("este es el estado y key de cada led:", estadoled);
		// TRABAJAR AQUI
	}

	pintoLeds = () => {
		// Nos devuelve cada objeto de la metrix de objetos 
		// luego le asignamos un key con map
		return (
			Object.keys(arrayLeds).map(key => (
				<Led 
					key={key}
					keyid={key}
					reciboEstadoLed={this.reciboEstadoLed}
				/>
			)) 
		)
	}
	
	render(){
		return (	
				
			<div id="Matrix"> 
				{this.pintoLeds()}
			</div>
		)
	}
}



export default Matrix;
