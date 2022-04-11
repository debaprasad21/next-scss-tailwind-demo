import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import lamborghini from '../assets/733911.jpg';
import buggati from '../assets/buggati.webp';
import ferrari from '../assets/ferrari.jpg';
import mercedes from '../assets/mercedes.webp';

const CardComponent = ({ heading, description, imgSrc, customClass, clickUrl }) => {
  const imageMap = (name) => {
    if (name === 'lamborghini') return lamborghini;
    if (name === 'buggati') return buggati;
    if (name === 'mercedes') return mercedes;
    return ferrari;
  };
  return (
    <Card sx={{ maxWidth: 420 }} className={customClass}>
      <CardActionArea href={clickUrl}>
        <CardMedia component="img" image={imageMap(imgSrc).src} alt={imgSrc} className="h-32" />
        <CardContent className="h-72">
          <p className="head-2">{heading || 'Lizard'}</p>
          <p className="head-3">
            {description ||
              'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
