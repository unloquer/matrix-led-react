import React from 'react';

const FlechaIzquierda = (props) => {
  return (
    <div className="backArrow" onClick={props.irAlaAnterior}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default FlechaIzquierda;