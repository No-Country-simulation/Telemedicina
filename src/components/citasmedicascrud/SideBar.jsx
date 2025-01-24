import { ContactEmergency} from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"



export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box
    component='nav'
    sx={{width:{sm:drawerWidth}, flexShrink:{sm: 0}}}>

      <Drawer variant="permanent"
      open
      sx={{
        display: { xs: 'block'},
        '& .MuiDrawer-paper':{boxSizing: 'border-box', width: drawerWidth}
      }}
      >
        <Toolbar>
          <Typography variant="h6" className="text-primary">Citas Medicas</Typography>
        </Toolbar>
        <Divider />

        <List>
         {['paciente1', 'paciente2', 'paciente3', 'paciente4'].map( text =>(

          <ListItem key={text} disablePadding className="text-primary">
          <ListItemButton>

            <ListItemIcon>
              <ContactEmergency />
            </ListItemIcon>

            <Grid container>
                <ListItemText primary={text}/>
                <ListItemText secundary={'carlos valderrama'}/>
              </Grid>
          </ListItemButton>
          </ListItem>
         ))}
        </List>

      </Drawer>

    </Box>
  )
}


