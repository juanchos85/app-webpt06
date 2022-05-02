import React from 'react';
import CardTemp from './CardTemp';
import propTypes from 'prop-types';
import { Profiler } from 'react/cjs/react.development';
export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  function handleOnClose() {
    if(typeof onClose === 'fuction'){
onClose();
    }
  }
  return <div>
    <button onClick= {onClose}>X</button>
    <span>{name}</span>
    <CardTemp label="Min" value= {min}/>
   <CardTemp label="Max" value= {max}/>

    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono del clima" />
    
    
  </div>
};
Card.propTypes={
  max: propTypes.number,
  min:propTypes.number,
  name: propTypes.string,
  img: propTypes.string,
  onClose: propTypes.func,
}
