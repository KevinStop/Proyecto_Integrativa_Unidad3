import React from "react";
import { AppBar, Toolbar, Typography, Grid, Button } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';


const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#044c9b", color: "#ffffff", borderRadius: "10px"}}>
      <Toolbar>
        <MenuBookIcon sx={{ fontSize: 50}}/>
        <Typography variant="h6" color="inherit">
          BiblioWEB
        </Typography>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Button  color="inherit" aria-label="Ir a la página de libros">
              Libros
            </Button>
          </Grid>
          <Grid item>
            <Button   color="inherit" aria-label="Ir a la página de inicio">
              Inicio
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
