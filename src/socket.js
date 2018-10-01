
const connection = new WebSocket('ws://192.168.0.178:81/', ['arduino']);

connection.onopen = () => { connection.send('Connect ' + new Date()); };
connection.onerror = error => { console.log('WebSocket Error ', error);};
connection.onmessage = e => { console.log('Server: ', e.data);}

const corazon = [
  0, 0, 0, 0, 0, 0, 0, 0,  
  0, 0, 1, 0, 0, 1, 0, 0,
  0, 1, 0, 1, 1, 0, 1, 0,
  0, 1, 0, 0, 0, 0, 1, 0,
  0, 1, 0, 0, 0, 0, 1, 0,
  0, 0, 1, 0, 0, 1, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
 ];

function enviarSocket(data) {
  let converter = corazon.toString();
  //console.log(data.ledsState.toString());
  console.log(data);
  
  //connection.send(converter);
  /*
  console.log("desde enviarsocket: ");
  */

  //socket.on('array', envioData => (data.ledsState.toString()));
  //socket.emit('enviarSocket', 1000);


  
}


export { enviarSocket };

