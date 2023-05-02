import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://www.estadao.com.br/resizer/PfoIII0JPpSHjA6yxI0jLwLU_l8=/arc-anglerfish-arc2-prod-estadao/public/AJ2WLO65KBLEXM5AYCQHR7HGRA.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rio de Janeiro
        </Typography>
        <Typography variant="body2" color="text.secondary">
        O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema, pela estátua de 38 metros de altura do Cristo Redentor, no topo do Corcovado, e pelo Pão de Açúcar, um pico de granito com teleféricos até seu cume. A cidade também é conhecida pelas grandes favelas. O empolgante Carnaval, com carros alegóricos, fantasias extravagantes e sambistas, é considerado o maior do mundo
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained">Saiba Mais</Button>
      </CardActions>
    </Card>
  );
}