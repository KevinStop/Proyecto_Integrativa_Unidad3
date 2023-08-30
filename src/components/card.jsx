import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./card.css"; // Importa tu archivo CSS personalizado

export default function ActionAreaCards() {
  return (
    <div className="centered-container">
      <div className="card-container">
        <div className="card">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
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
                height="140"
                image="/static/images/cards/savannah-cat.jpg"
                alt="savannah cat"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Savannah Cat
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Savannah cats are a hybrid breed of domestic cat and African
                  serval, with a distinctive spotted coat and a long, slender
                  body.
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
                height="140"
                image="/static/images/cards/red-panda.jpg"
                alt="red panda"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Red Panda
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Red pandas are tree-dwelling mammals native to the Eastern
                  Himalayas and southwestern China. They are about the size of a
                  raccoon, with reddish-brown fur and a long, bushy tail.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
}
