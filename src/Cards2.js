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
        image="https://www.melhoresdestinos.com.br/wp-content/uploads/2016/08/o-que-fazer-em-sao-paulo-capa2019-01-820x430.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          São Paulo
        </Typography>
        <Typography variant="body2" color="text.secondary">
        São Paulo, centro financeiro do Brasil, está entre as cidades mais populosas do mundo, com diversas instituições culturais e uma rica tradição arquitetônica. Há prédios simbólicos como a catedral neogótica, o Edifício Martinelli, um arranha-céu inaugurado em 1929, e o Edifício Copan, com suas linhas curvas projetadas pelo arquiteto modernista Oscar Niemeyer. arca o local onde os padres jesuítas fundaram a cidade em 1554.
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained">Saiba Mais</Button>
     </CardActions>
    </Card>
  );
}