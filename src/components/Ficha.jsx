import React, { useState } from 'react'
import perrito from "../assets/perrito.png"
import '../App.css'
import { Button, Avatar, Typography, Stack } from '@mui/material'



const Ficha = ({id, animal, atribute, imageUrl, imageSize, description}) => {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }



  return (
    <Stack direction={{ xs: 'column', sm: 'column' }} spacing={{ xs: 2, sm: 4, md: 6 }} sx={{alignItems: "center", justifyContent: "center"}}>
      <Typography variant="h3">Rasca {animal}</Typography>
        <Avatar src={imageUrl} sx={{ width: imageSize, height: imageSize}} alt={description} />
        
      <Button id="buton" variant="contained" elevation={9} sx={{color : "white", backgroundColor: "orange"}}  onClick={handleClick}>
        Me has hecho {count} rascaditas 
      </Button>
      <br></br><br></br>


      
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

export default Ficha