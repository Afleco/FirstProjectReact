import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import perrito from '../src/assets/perrito.png'
import cat from '../src/assets/cat.jpg'
import bird from '../src/assets/bird.jpg'
import turtle from '../src/assets/turtle.jpg'
import dog from '../src/assets/dog.jpg'


import Ficha from './components/Ficha'
import FormRegistro from './components/FormRegister'

import './App.css'

function App() {


  return (
    <>
      <Ficha animal='al perrito' image={perrito} description="guau guau!"/>
      
      <Ficha animal='al gato' image={cat} description="miau miau!"/>
      <Ficha animal='al pájaro' image={bird} description="pio pio!"/>
      <Ficha animal='a la tortuga' image={turtle} description="glub glub!"/>
      <Ficha animal='al perro' image={dog} description="guau guau!"/>
      {/*<FormRegistro />*/}
    </>
  )
}

export default App
