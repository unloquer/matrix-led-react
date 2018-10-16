import React, {Component} from 'react';

class Request extends Component{

    envioPeticion = () => {
        const saludo = 121;
        const url = `http://192.168.40.1/pr?sa=${saludo}`;
        console.log(url);
        fetch(url)
            .then(respuesta => {
                console.log("respuesta del servidor");
                console.log(respuesta);
            })
            .then(respuesta2 => {
                console.log("segunda respuesta");
                console.log(respuesta2);
            })
    }

    render(){
        return(
            <button type="button" onClick={this.envioPeticion}> Envío request </button>  
        )
    }
    
}

export default Request;

