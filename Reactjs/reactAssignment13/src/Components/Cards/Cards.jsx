import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export default function Cards({title,desc,image,id}) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 355, height:450, boxShadow:"4px 4px 15px rgba(0.3 , 0.3 , 0.6)", }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height='250px'
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title.slice(0,20)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc.slice(0,150)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=>navigate(`/product/${id}`)} size="small" color="primary">
          Add
        </Button>
      </CardActions>
    </Card>
  );
}
