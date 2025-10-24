import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import perrito from '../src/assets/perrito.png'
import cat from '../src/assets/cat.jpg'
import bird from '../src/assets/bird.jpg'
import turtle from '../src/assets/turtle.jpg'
import dog from '../src/assets/dog.jpg'

import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'


import Ficha from './components/Ficha'
import FormRegistro from './components/FormRegister'

import './App.css'

function App() {

  const animals = [{
    id: 0,
    animal: 'perrito',
    atribute: 'bello',
    imageUrl: '../src/assets/perrito.png',
    imageSize: 400,
    description: 'guau guau!'
  },
  {
    id: 1,
    animal: 'gato',
    atribute: 'feliz',
    imageUrl: '../src/assets/cat.jpg',
    imageSize: 400,
    description: 'Gato común'
  },
  {
    id: 2,
    animal: 'perro',
    atribute: 'bello',
    imageUrl: '../src/assets/dog.jpg',
    imageSize: 400,
    description: 'Perro callejero'
  },
  {
    id: 3,
    animal: 'loro',
    atribute: 'hablador',
    imageUrl: '../src/assets/bird.jpg',
    imageSize: 400,
    description: 'Loro de la jungla'
  },
  {
    id: 4,
    animal: 'tortuga',
    atribute: 'perezosa',
    imageUrl: '../src/assets/turtle.jpg',
    imageSize: 400,
    description: 'Tortuga'
  }]



  return (
    <>
    <List>
      {animals.map((animal) => (
        <ListItem key={animal.id}>
          <Ficha animal={animal.animal} atribute={animal.atribute} imageUrl={animal.imageUrl} imageSize={animal.imageSize} description={animal.description} />
        </ListItem>))}
    </List>
      {/* <Ficha animal='al perrito' image={perrito} size={400} description="guau guau!" />

      <Ficha animal='al gato' image={cat} size={400} description="miau miau!" />
      <Ficha animal='al pájaro' image={bird} size={400} description="pio pio!" />
      <Ficha animal='a la tortuga' image={turtle} size={400} description="glub glub!" />
      <Ficha animal='al perro' image={dog} size={400} description="guau guau!" /> */}
      <FormRegistro />
    </>
  )
}

export default App
