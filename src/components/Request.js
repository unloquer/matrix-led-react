import React, {Component} from 'react';

class Request extends Component{

    envioPeticion = () => {
        const saludo = "hola"
        const url = `http://192.168.40.1/prueba&${hola}`;
        console.log(url)
        /*
        fetch(url)
            .then(respuesta => {
                console.log("respuesta del servidor");
                console.log(respuesta);
                //return respuesta.json();
            })
        */
    }

    render(){
        return(
            <div className="">
                <button type="button" onClick={this.envioPeticion()}> Envío request </button>  
            </div>
        )
    }
    
}

export default Request;

