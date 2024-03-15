import Third from '../Third';
import './second.css'
import React,{useEffect, useState} from 'react';

function Second() {
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
            <p className='question'>Que inteligente mi preciosa, aquí va otra pregunta</p>
            <img className='img-heart' src='https://www.clipartmax.com/png/full/197-1970959_whf-logo-spinner-to-indicate-loading-transparent-loading-heart-gif.png' alt='heart png' ></img>
          </div>
        </div>
      );
    case false:
      return (
        <div className="container-todo">
          <div className='container-cuadro'>
            <p className='question'>Qué fecha iniciamos nuestra aventura?</p>
            <button className='button-click' onClick={() => {setIsLoading( )}}>30 de febrero</button>
            <button className='button-click' onClick={() => {setIsLoading( )}}>0 de noviembre</button>
            <button className='button-click' onClick={() => {setIsLoading(null)}}>♥️15 de noviembre♥️</button>
            <button className='button-click' onClick={() => {setIsLoading( )}}>27 de marzo</button>
          </div> 
        </div>
      );
    case null:
      return (
        <Third></Third>
      )
    default:
      return (
        <div className="container-todo">
          <div className='container-cuadro'>
            <p className='question'>Esa no es la respuesta bb, intenta denuevo</p>
            <button className='button-click' onClick={() => {setIsLoading(false)}}>Regresar</button>
          </div> 
        </div>
      )
    }
}

export default Second;
