import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#044c9b", color: "#ffffff", borderRadius: "10px"}}>
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center" spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5">Mi Biblioteca Digital</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              © {new Date().getFullYear()}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ mt: 1 }}>
              <IconButton size="small" color="primary">
                <FacebookIcon sx={{ fontSize: 40, color: "white" }} />
              </IconButton>
              <IconButton size="small" color="primary">
                <TwitterIcon sx={{ fontSize: 40, color: "white" }} />
              </IconButton>
              <IconButton size="small" color="primary">
                <InstagramIcon sx={{ fontSize: 40, color: "white" }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
