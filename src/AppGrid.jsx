import { Button, Grid } from '@mui/material'



const AppGrid = () => {

    return ( 
        <Grid container spacing={{xs:2, sm: 3, md: 8}} sx={{alignItems: "center", justifyContent: "center", padding: "15px"}} direction={{ xs: 'column', sm: 'row'}}>
            <Grid size={{xs: 6, sm: 3, md: 2}} sx={{padding: "5px"}}>
                <Button variant='contained' fullWidth> 1 </Button>
            </Grid>
            <Grid size={{xs: 6, sm: 3, md: 2}} sx={{padding: "5px"}}>
                <Button variant='contained' fullWidth> 1 </Button>
            </Grid>
            <Grid size={{xs: 6, sm: 3, md: 2}} sx={{padding: "5px"}}>
                <Button variant='contained' fullWidth> 1 </Button>
            </Grid>
        </Grid>
    
    )
}

export default AppGrid