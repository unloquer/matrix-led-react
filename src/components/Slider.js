import React, {Component} from 'react';
import {alertas} from '../alertas';

class Slider extends Component {
    
    state = {
        posicion: 0,
    }

    aumentar = () => {
        let aumentar = this.state.posicion;
        this.setState({
            posicion: ( aumentar + 1 ) % alertas.length
        })

        this.alertas();
    }

    disminuir = () => {
        let disminuir = this.state.posicion;
        this.setState({
            posicion: Math.abs( disminuir - 1 ) % alertas.length
        })

        this.alertas();
    }

    alertas = () => {
        let pos = this.state.posicion;
        let alert = "";

        if(pos === 0)
        {
            alert = alertas[0];
        }
        else if (pos === 1) 
        {
            alert = alertas[1];
        }
        else if (pos === 2) 
        {
            alert = alertas[2];
        }
        else if (pos === 3) 
        {
            alert = alertas[3];
        }
        else
        {
            alert = alertas[4];
        }

        this.props.generoAlertas(alert);

    }
        
    

    render() { 
        
        return ( 
            <div className="slider-container">
                <p onClick={this.aumentar}>+</p> 
                <p onClick={this.disminuir}>-</p> 
            </div>
         );
    }
}
 
export default Slider;