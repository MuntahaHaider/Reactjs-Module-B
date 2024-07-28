import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea , Box , Typography} from '@mui/material';
import Web from '/src/assets/webapp.png'
import flutter from '/src/assets/flutter.jpeg'
import graphics from '/src/assets/graphic.jpg'
import digital from '/src/assets/socialmedia.png'
import blockchain from '/src/assets/blockchain.jpg'
export default function Cards({desc,h1,imgSrc}) {
  return (
    <>
    <Card 
      sx={{ 
        maxWidth: '350px',
        height:"330px", 
        border: '1px solid #ddd', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        margin: '10px',
        borderRadius:"20px",
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)', 
        }
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          width='100%'
          height="250px"
          image={imgSrc}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{
            color:"black",
            textAlign:"center",
            fontWeight:"bold"
          }}>
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
    
  );
}
