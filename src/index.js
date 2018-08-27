import React from 'react';
import ReactDOM from 'react-dom';
import './css/Aplicacion.css';
import Aplicacion from './components/Aplicacion';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Aplicacion />, document.getElementById('root'));
registerServiceWorker();
