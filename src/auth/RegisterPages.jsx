import { Link as RouterLink } from "react-router-dom";
import { Button, TextField, Typography, Grid, Link } from "@mui/material";
import SplitButton from "../components/SplitButtom";

export const RegisterPages = () => {
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
        className="bg-background shadow-xl"
        xs={3}
        sx={{ padding: 3, borderRadius: 2 }}
      >
        <Typography
          variant="h3"
          sx={{ mb: 1 }}
          className="text-primary"
        >
          Login
        </Typography>

        <form>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{ mt: 2 }}
            >
              <TextField
                label="Nombre "
                type="text"
                placeholder="Nombre"
                fullWidth
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ mt: 2 }}
            >
              <TextField
                label="Apellido "
                type="text"
                placeholder="Nombre"
                fullWidth
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ mt: 2 }}
            >
              <TextField
                type="date"
                fullWidth
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ mt: 2 }}
            >
              <TextField
                label="Nacionalidad"
                type="text"
                placeholder="Nacionalidad"
                fullWidth
              />
            </Grid>

            <SplitButton sx={{ mt: 2 }} />

            <Grid
              item
              xs={12}
              sx={{ mt: 2 }}
            >
              <TextField
                label="Usuario"
                type="email"
                placeholder="Usuario"
                fullWidth
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ mt: 2 }}
            >
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
              />
            </Grid>

            <Grid
              container
              spacing={2}
              sx={{ mb: 2, mt: 2 }}
            >
              <Grid
                item
                xs={12}
              >
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ borderRadius: 10 }}
                  className="bg-btns hover:bg-blue-500 "
                >
                  Registro
                </Button>
              </Grid>

              <Grid
                container
                direction="row"
                justifyContent="end"
              >
              <Typography sx={{ mr: 1 }}>¿Ya tienes Cuenta?</Typography>
                <Link
                  component={RouterLink}
                  to="/auth/login"
                  color="inherit"
                >
                  Ingresar
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
