import React,{Component} from 'react';
import Led from './Led';
import './componentes.css';
import {arrayLeds} from '../arrayLeds';

class Matrix extends Component{ 
	
	constructor(){
		super();
		this.arrayLeds = arrayLeds;
	} 
	

    mandarPropsLed = (id, name, color, fila, columna) => { 
		let objetotmp = {};

		objetotmp = {
			key : id,
			nombre : name,
			color: color,
			fila: fila,
			columna: columna
		}
		return objetotmp;
	};
	
	render(){

		//const matrixnueva = this.mandarPropsLed(1, 'alex', 'black', 2, 5);
		//console.log(matrixnueva)

		return (			
			<div id="Matrix"> 
				{/* Nos devuelve cada objeto de la metrix de objetos 
				luego le asignamos un key con map
				*/}				
				{Object.keys(arrayLeds).map(key => (
					<Led 
						key={key}
					/>
				)) }
			</div>
		)
	}
}



export default Matrix;
