import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../styles/card.css"; // Importa tu archivo CSS personalizado

export default function ActionAreaCards() {
  return (
    <div className="centered-container">
      <div className="card-container">
        <div className="card">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://cdn.culturagenial.com/es/imagenes/el-principito-portada-cke.jpg"
                alt="Principito"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  El principito
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Vive en un pequeño planeta que podríamos identificar como su propia vida.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="card">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://i.pinimg.com/originals/c0/7f/03/c07f0335aab7d6b4d32d90ab7ba9e7d5.jpg"
                alt="El Hobbit"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  El Hobbit
                </Typography>
                <Typography variant="body2" color="text.secondary">
                El Hobbit, es una novela de J.R.R. Tolkien publicada en el año 1937.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="card">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea >
              <CardMedia
                component="img"
                height="240"
                image="https://cdn.culturagenial.com/es/imagenes/la-sombra-del-viento-portada-cke.jpg"
                alt="Sombra de viento"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sombra del viento
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Daniel es un niño de trece años, huérfano de madre e hijo de un librero de Barcelona.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
}
