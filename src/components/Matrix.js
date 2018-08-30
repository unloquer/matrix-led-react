import React,{Component} from 'react';
import Led from './Led';
import './componentes.css';
import {arrayLeds} from '../arrayLeds';

class Matrix extends Component{ 
	
	constructor(){
		super();
		this.arrayLeds = arrayLeds;
	} 

	enviarEstadoLed = estadoled => {
		console.log("este es el estado y key de cada led:", estadoled);
		// TRABAJAR AQUI
	}
	
	render(){

		return (			
			<div id="Matrix"> 
				{/* Nos devuelve cada objeto de la metrix de objetos 
				luego le asignamos un key con map
				*/}				
				{Object.keys(arrayLeds).map(key => (
					<Led 
						key={key}
						keyid={key}
						enviarEstadoLed={this.enviarEstadoLed}
					/>
				)) }
			</div>
		)
	}
}



export default Matrix;
