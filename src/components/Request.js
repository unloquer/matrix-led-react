import React, {Component} from 'react';

class Request extends Component{

    envioPeticion = () => {
        const url = "http://192.168.40.1/prueba";
        fetch(url)
            .then(respuesta => {
                return respuesta.json();
            })
    }

    render(){
        return(
            <div className="">
                <button type="button" onClick={this.envioPeticion}> Envío request </button>  
            </div>
        )
    }
    
}

export default Request;

