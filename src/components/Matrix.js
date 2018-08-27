import React,{Component} from 'react';
import Led from './Led';
import './componentes.css';


class Matrix extends Component{ 
	
	constructor(props){
		super();
	} 
	
	render(){
		//console.log(this.props.leds)
		const {color, f, c, nombre} = this.props.leds;

		return (			

			<div id="Matrix"> 
				{/* Nos devuelve cada objeto de la metrix de objetos 
				luego le asignamos un key con map
				*/}
				{Object.keys(this.props.leds).map(key => (
					<Led
						key={key}
						nombre={nombre}
						fila={f}
						columna={c}
						color={color}
					/>
				)) }
			</div>
		)
	}
}



export default Matrix;
