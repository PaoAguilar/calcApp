import React, { useState } from 'react';
import Functions from './components/Functions'
import MathOperations from './components/MathOperations';
import Numbers from './components/Numbers';
import Result from './components/Result';
import './App.css';


// Funcion flecha o Arrow Function
const App = () => {

  // Array destructuring
  // 1er posicion: valor (que inicialmente es el valor por defecto)
  // 2da posicion: funcion que me va a modificar el valor por defect
  const [stack, setStack] = useState('') // Devuelvo un array que tiene un texto y una funcion que modifica al texto

  // Lo que ejecuta la funcion
  console.log('Renderizacion de App')
  return (
    <main className='react-calculator'>
      <Result value={stack} />
      <Numbers
        onClickNumber={number => {
          console.log(`number ${number}`)
          setStack(number)
        }} />
      <Functions
        onContentClear={() =>
          console.log(`Content Clear`)}
        onDelete={() =>
          console.log(`Delete`)} />
      <MathOperations
        onClickOperation={operation =>
          console.log(`Operacion ${operation}`)}
        onClickEqual={equal =>
          console.log(`Equal: ${equal}`)} />
    </main>
  )
}

export default App;
