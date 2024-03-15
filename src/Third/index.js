import './third.css'
import React,{useEffect, useState} from 'react';

function Third() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false);
    },5000)
  },[])

  switch (isLoading){
    case true:
      return (
        <div className="container-todo">
          <div className='container-cuadro-2'>
            <p className='question'>Muy bien amor, respondiste todas las preguntas bien, espera que ahora cargue el mensaje</p>
            <img className='img-heart' src='https://www.clipartmax.com/png/full/197-1970959_whf-logo-spinner-to-indicate-loading-transparent-loading-heart-gif.png' alt='heart png'></img>
          </div>
        </div>
      );
    case false:
      return (
        <div className="container-todo">
          <div className='container-cuadro-2'>
            <p className='question'>Ya cargo el mensaje amor, dale click al boton</p>
            <button className='button-click' onClick={() => {setIsLoading(null)}}>Hazme click</button>
          </div>
        </div>
      );
    default:
      return (
        <div className="container-todo">
          <div className='container-cuadro-3'>
            <p className='question'>Feliz cuatro meses juntos Ashlly, me alegra que nuestra aventura siga avanzando de verdad mi amor</p>
            <p className='question'>Estos cuatro meses juntos han sido muy maravillosos para mi, le diste un cambio en mi vida para bien mi amor</p>
            <p className='question'>Desde que nos conocimos en la academia me alegra haberte conocido Ashlly</p>
            <p className='question'>Habremos tenido nuestros problemas durante estos 4 meses pero subimos sobrellevarlos amor</p>
            <p className='question'>Enserio amor gracias por brindarme tu amor, de verdad, Ashlly feliz 4 meses juntos mi amor</p>
          </div> 
        </div>
      )
    }
}

export default Third;
