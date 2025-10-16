import React, { useState } from 'react'
import perrito from "./assets/perrito.png"
import './App.css'
import { Button, Avatar, Typography, Stack } from '@mui/material'



const MiAnimal = () => {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }


  return (
    <Stack direction={{ xs: 'column', sm: 'column' }} spacing={{ xs: 2, sm: 4, md: 6 }} sx={{alignItems: "center", justifyContent: "center"}}>
      <Typography variant="h3">¡Holi!</Typography>
        <Avatar src={perrito} sx={{ width: "400px", height: "400px"}} alt="perrito" />
        
      <Button id="buton" variant="contained" elevation={9} sx={{color : "blue", backgroundColor: "lightgrey"}}  onClick={handleClick}>
        Me has hecho {count} rascaditas 
      </Button>


      
      {/*  
      <Button variant="text" color="warning">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant='text' size='large'>Large Text</Button>

      <Button sx={{color: 'orange', backgroundColor: 'blue'}}> Letra naranja </Button>
      <Button sx={{color: 'orange', backgroundColor: 'white'}}> Letra naranja y fondo blanco</Button>

      <Button variant="contained" disabled>Disabled</Button>
      */}
    </Stack>
  )
}

export default MiAnimal
