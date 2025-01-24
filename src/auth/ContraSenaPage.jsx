import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"


export const ContraSenaPage = () => {
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
        >Recuperar Seña</Typography>

<form>
                  <Grid container>
                    <Grid item xs={ 12 } 
                    sx={{ mt: 2 }} >
                      <TextField
                      label="Usuario o Email"
                      type="email"
                      placeholder="Usuario o Email"
                      fullWidth/>
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 2,   }}>
                      <Grid item xs={ 12 } >
                        <Button variant='contained' 
                        fullWidth
                        sx={{borderRadius: 10}}
                        className="bg-btns hover:bg-blue-500 ">
                          Enviar
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                      <Link  component={RouterLink} to="/auth/login" color="inherit">
                        Ingresar
                      </Link>
                    </Grid>
                  </Grid>
                </form>

      </Grid>
  </Grid>


  )
}
