import Second from '../Second';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingChange = (value) => {
    setIsLoading(value);
  }  
  switch (isLoading){
    case true:
      return (
        <div className="container-todo">
          <div className='container-cuadro'>
            <p className='question'>Cúal es mi comida favorita?</p>
            <button className='button-click' onClick={() => {setIsLoading(null)}}>Tallarin Verde</button>
            <button className='button-click' onClick={() => {setIsLoading(null)}}>Pollo con verduras</button>
            <button className='button-click' onClick={() => {setIsLoading(null)}}>Siete colores</button>
            <button className='button-click' onClick={() => {setIsLoading(false)}} setIsLoading={handleLoadingChange} isLoading={isLoading}>♥️ Tú ♥️</button>
          </div>
        </div>
      );
    case false:
      return (
        <Second></Second>
      );
    default:
      return (
        <div className="container-todo">
          <div className='container-cuadro'>
            <p className='question'>Este no es amorcito, intenta denuevo</p>
            <button className='button-click' onClick={() => {setIsLoading(true)}}>Regresar</button>
          </div> 
        </div>
      )
    }
}

export default App;
