import React from 'react';

const FlechaDerecha = (props) => {
  return (
    <div className="nextArrow" onClick={props.irAlaSiguiente}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default FlechaDerecha;