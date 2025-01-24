import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { SvgIcon } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';

const pages = ["Inicio", "Servicios", "Especialidades", "Nosotros", "Unete"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{background:{xs:"#3BA5D8", md:"transparent" }}}>
      <Container maxWidth="xl" sx={{ background: "transparent" }}>
        <Toolbar disableGutters sx={{display:"flex"}}>
          <SvgIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, height: "50px" }}
          >
            <svg
              viewBox="0 0 90 147"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M85.2664 63.0058C84.4158 62.181 83.51 61.6235 82.5489 61.3331V38.5182C82.5489 19.5831 60.7879 0.347076 45.1434 0.347076C31.0614 0.347076 7.738 18.8304 7.738 38.5008V61.3493C6.7774 61.6281 5.87155 62.1857 5.02045 63.022C2.3029 65.6507 0.686279 70.5178 0.686279 76.054C0.686279 87.9475 4.84473 96.3609 11.2478 98.0662C16.0771 125.048 29.4219 146.708 45.1434 146.708C60.8757 146.708 74.2213 125.046 79.0498 98.0662C85.4536 96.3598 89.6121 87.9464 89.6121 76.054C89.6121 70.5329 87.9947 65.6496 85.2771 63.0058M5.09762 76.0528C5.09762 72.8747 5.97774 70.0311 7.40795 68.643C8.00183 68.0746 8.64359 67.7958 9.33323 67.8066V76.3374C9.34036 81.1774 9.61897 85.9445 10.169 90.6389C6.50567 88.2135 5.10831 81.9909 5.10831 76.0528M45.1434 25.1529C48.1722 25.3929 51.0247 27.3912 53.1127 30.7355C55.2007 34.0799 56.3648 38.5151 56.3648 43.1263C56.3648 47.7374 55.2007 52.1726 53.1127 55.517C51.0247 58.8613 48.1722 60.8596 45.1434 61.0996C42.0698 60.959 39.153 59.0038 37.0115 55.6484C34.8701 52.2931 33.6723 47.8016 33.6723 43.1263C33.6723 38.4509 34.8701 33.9594 37.0115 30.6041C39.153 27.2487 42.0698 25.2935 45.1434 25.1529ZM76.5637 76.3374C76.5637 92.4127 73.0654 108.704 66.9602 121.016C60.8979 133.294 53.1418 140.033 45.1434 140.033C37.1451 140.033 29.3898 133.276 23.3274 121.032C17.2215 108.704 13.7232 92.4289 13.7232 76.3374V60.3968C18.2338 56.3312 23.7346 53.2879 29.8955 51.4816C31.0333 56.2463 33.1056 60.3652 35.8325 63.2816C38.5594 66.1981 41.8095 67.7715 45.1434 67.7892C52.1516 67.7892 58.1253 60.9811 60.3807 51.5141C66.0737 53.0851 71.5474 56.1289 76.5637 60.513V76.3374ZM80.1285 90.6389C80.6857 85.9554 80.9682 81.1882 80.9758 76.3374V67.8066C81.6507 67.7958 82.2924 68.0746 82.9011 68.643C84.3198 70.0311 85.2007 72.8584 85.2007 76.054C85.2007 81.9909 83.8026 88.2135 80.1392 90.6389M45.1434 46.9154C44.5284 46.9202 43.9341 46.5768 43.4765 45.9519C43.0189 45.327 42.7307 44.4654 42.6681 43.5351L38.2896 44.2391C38.4399 46.4201 39.0362 48.4746 39.9944 50.1137C40.9527 51.7527 42.2247 52.8939 43.6317 53.3766C45.0387 53.8593 46.5098 53.6594 47.8382 52.8048C49.1665 51.9503 50.2853 50.4842 51.0371 48.6127C51.7889 46.7412 52.136 44.5585 52.0295 42.3715C51.923 40.1845 51.3683 38.1033 50.4434 36.4205C49.5185 34.7377 48.27 33.5381 46.8733 32.9903C45.4767 32.4425 44.0023 32.5741 42.6574 33.3665L44.2526 39.588C44.5312 39.4208 44.8282 39.3371 45.1434 39.3371C45.8044 39.3371 46.4383 39.7363 46.9057 40.4469C47.373 41.1575 47.6356 42.1213 47.6356 43.1263C47.6356 44.1312 47.373 45.095 46.9057 45.8056C46.4383 46.5162 45.8044 46.9154 45.1434 46.9154ZM32.8988 108.136C35.1427 115.596 39.7748 120.731 45.1434 120.731C50.5121 120.731 55.1442 115.596 57.3881 108.152C54.0654 110.026 49.797 111.147 45.1434 111.147C40.4899 111.147 36.2321 110.026 32.8988 108.136Z"
                fill="#0086FF"
              />
            </svg>
          </SvgIcon>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "black",
              letterSpacing: ".1rem",
              textDecoration: "none"
            }}
          >
            TELEMEDICINA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color:"white"}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
              <ButtonGroup size="small" orientation="vertical">
            <Button variant="outlined"  >Registro</Button> 
            <Button variant="contained">Iniciar Sesión</Button> 
            </ButtonGroup>
              </MenuItem>
            </Menu>
          </Box>
          <SvgIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, height:"50px" }}
          >
            <svg
              viewBox="0 0 90 147"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M85.2664 63.0058C84.4158 62.181 83.51 61.6235 82.5489 61.3331V38.5182C82.5489 19.5831 60.7879 0.347076 45.1434 0.347076C31.0614 0.347076 7.738 18.8304 7.738 38.5008V61.3493C6.7774 61.6281 5.87155 62.1857 5.02045 63.022C2.3029 65.6507 0.686279 70.5178 0.686279 76.054C0.686279 87.9475 4.84473 96.3609 11.2478 98.0662C16.0771 125.048 29.4219 146.708 45.1434 146.708C60.8757 146.708 74.2213 125.046 79.0498 98.0662C85.4536 96.3598 89.6121 87.9464 89.6121 76.054C89.6121 70.5329 87.9947 65.6496 85.2771 63.0058M5.09762 76.0528C5.09762 72.8747 5.97774 70.0311 7.40795 68.643C8.00183 68.0746 8.64359 67.7958 9.33323 67.8066V76.3374C9.34036 81.1774 9.61897 85.9445 10.169 90.6389C6.50567 88.2135 5.10831 81.9909 5.10831 76.0528M45.1434 25.1529C48.1722 25.3929 51.0247 27.3912 53.1127 30.7355C55.2007 34.0799 56.3648 38.5151 56.3648 43.1263C56.3648 47.7374 55.2007 52.1726 53.1127 55.517C51.0247 58.8613 48.1722 60.8596 45.1434 61.0996C42.0698 60.959 39.153 59.0038 37.0115 55.6484C34.8701 52.2931 33.6723 47.8016 33.6723 43.1263C33.6723 38.4509 34.8701 33.9594 37.0115 30.6041C39.153 27.2487 42.0698 25.2935 45.1434 25.1529ZM76.5637 76.3374C76.5637 92.4127 73.0654 108.704 66.9602 121.016C60.8979 133.294 53.1418 140.033 45.1434 140.033C37.1451 140.033 29.3898 133.276 23.3274 121.032C17.2215 108.704 13.7232 92.4289 13.7232 76.3374V60.3968C18.2338 56.3312 23.7346 53.2879 29.8955 51.4816C31.0333 56.2463 33.1056 60.3652 35.8325 63.2816C38.5594 66.1981 41.8095 67.7715 45.1434 67.7892C52.1516 67.7892 58.1253 60.9811 60.3807 51.5141C66.0737 53.0851 71.5474 56.1289 76.5637 60.513V76.3374ZM80.1285 90.6389C80.6857 85.9554 80.9682 81.1882 80.9758 76.3374V67.8066C81.6507 67.7958 82.2924 68.0746 82.9011 68.643C84.3198 70.0311 85.2007 72.8584 85.2007 76.054C85.2007 81.9909 83.8026 88.2135 80.1392 90.6389M45.1434 46.9154C44.5284 46.9202 43.9341 46.5768 43.4765 45.9519C43.0189 45.327 42.7307 44.4654 42.6681 43.5351L38.2896 44.2391C38.4399 46.4201 39.0362 48.4746 39.9944 50.1137C40.9527 51.7527 42.2247 52.8939 43.6317 53.3766C45.0387 53.8593 46.5098 53.6594 47.8382 52.8048C49.1665 51.9503 50.2853 50.4842 51.0371 48.6127C51.7889 46.7412 52.136 44.5585 52.0295 42.3715C51.923 40.1845 51.3683 38.1033 50.4434 36.4205C49.5185 34.7377 48.27 33.5381 46.8733 32.9903C45.4767 32.4425 44.0023 32.5741 42.6574 33.3665L44.2526 39.588C44.5312 39.4208 44.8282 39.3371 45.1434 39.3371C45.8044 39.3371 46.4383 39.7363 46.9057 40.4469C47.373 41.1575 47.6356 42.1213 47.6356 43.1263C47.6356 44.1312 47.373 45.095 46.9057 45.8056C46.4383 46.5162 45.8044 46.9154 45.1434 46.9154ZM32.8988 108.136C35.1427 115.596 39.7748 120.731 45.1434 120.731C50.5121 120.731 55.1442 115.596 57.3881 108.152C54.0654 110.026 49.797 111.147 45.1434 111.147C40.4899 111.147 36.2321 110.026 32.8988 108.136Z"
                fill="white"
              />
            </svg>
          </SvgIcon>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none",sm: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color:"white",
              textDecoration: "none",
            }}
          >
            TELEMEDICINA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#1D7CAD", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: {xs: "none", md: "flex" }}}>
            <ButtonGroup size="small" >
            <Button variant="outlined">Registro</Button> 
            <Button variant="contained">Iniciar Sesión</Button> 
            </ButtonGroup>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
