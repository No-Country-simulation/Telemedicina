
import { Link as RouterLink } from "react-router-dom"
import {  Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"





export const LoginPage = () => {
  return (


    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: "100vh", padding: 4 }}
  >
    <Grid
        item
        width={850}
        className='bg-background shadow-xl'
        xs={3}
        sx={{ padding: 3, borderRadius: 2 }}
      >

<Typography
          variant="h3"
          sx={{ mb: 1 }}
          className="text-primary"
        >Login</Typography>

<form>
                  <Grid container>
                    <Grid item xs={ 12 } 
                    sx={{ mt: 2 }} >
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

                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 2,   }}>
                      <Grid item xs={ 12 } sm={ 6 }>
                        <Button variant='contained' 
                        fullWidth
                        sx={{borderRadius: 10}}
                        className="bg-btns hover:bg-blue-500 ">
                          Login
                        </Button>
                      </Grid>
                      
                      <Grid item xs={ 12 } sm={ 6 }>
                        <Button variant='contained' 
                        fullWidth
                        sx={{borderRadius: 10 }}
                        className="bg-btns hover:bg-blue-500 ">
                          <Google />
                          <Typography sx={{ ml: 1 }}>Google</Typography>
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                      <Link  component={RouterLink} to="/auth/register" color="inherit">
                        Crea tu Cuenta
                      </Link>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                      <Link  component={RouterLink} to="/auth/contrasena" color="inherit">
                        Olvido Su Contraseña
                      </Link>
                    </Grid>
                  </Grid>
                </form>

      </Grid>
  </Grid>


   
  )
}



