import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Inicio
        </Typography>
        <Typography variant="h6">
          Libros
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
