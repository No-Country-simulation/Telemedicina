
import { Google } from '@mui/icons-material';
import { Button, TextField, Typography, Grid } from '@mui/material'



export const RegisterPages = () => {
  return (
    <>
      <Grid 
    container
    spacing={ 0 }
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{minHeight: '100vh', backgroundColor: 'blue', padding: 4}} 
    >
      <Grid item 
      className='box-shadow'
      xs={ 3 }
      sx={{ backgroundColor: "white", 
        padding: 3, 
        borderRadius: 2 }}
      >
        <Typography variant="h5" 
        sx={{mb: 1}}>Login</Typography>

        <form>
                  <Grid container>
                    <Grid item xs={ 12 } 
                    sx={{ mt: 2 }} >
                      <TextField
                      label="Nombre "
                      type="text"
                      placeholder="Nombre"
                      fullWidth/>
                    </Grid>

                    <Grid item xs={ 12 } 
                    sx={{ mt: 2 }} >
                      <TextField
                      label="Apellido "
                      type="text"
                      placeholder="Nombre"
                      fullWidth/>
                    </Grid>

                    

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                      <TextField
                      label="Usuario"
                      type="email"
                      placeholder="Usuario"
                      fullWidth/>
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                      <TextField
                      label="Contraseña"
                      type="password"
                      placeholder="Contraseña"
                      fullWidth/>
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 2 }}>
                      <Grid item xs={ 12 } sm={ 6 }>
                        <Button variant='contained' 
                        fullWidth>
                          Registro
                        </Button>
                      </Grid>
                      
                      <Grid item xs={ 12 } sm={ 6 }>
                        <Button variant='contained' 
                        fullWidth>
                          <Google />
                          <Typography sx={{ ml: 1  }}>Google</Typography>
                        </Button>
                      </Grid>
                    </Grid>
        
                  </Grid>
                </form>

      </Grid>
    </Grid>
    </>
  )
}




