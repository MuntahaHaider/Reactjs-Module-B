import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}
export default function Collage() {
  return (
    <ImageList
    sx={{
      height: 500,
      overflow: 'hidden', 
      margin:"auto",
      width:{
          sm:300,
          md:400,
          lg:1000
      },    
    }}
    variant="quilted"
    cols={4}
    rowHeight={121}
    >
      {itemData.map((item, index) => (
        <ImageListItem key={`${item.img}-${index}`} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: './src/assets/collage1.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: './src/assets/collage2.jpg',
    title: 'Burger',
  },
  {
    img: './src/assets/collage3.jpg',
    title: 'Camera',
  },
  {
    img: './src/assets/collage4.jpg',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: './src/assets/collage5.jpg',
    title: 'Hats',
    cols: 2,
  },
  {
    img: './src/assets/collage6.jpg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: './src/assets/collage1.jpg',
    title: 'Basketball',
  },
  {
    img: './src/assets/collage2.jpg',
    title: 'Fern',
  },
  {
    img: './src/assets/collage3.jpg',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: './src/assets/collage4.jpg',
    title: 'Tomato basil',
  },
  {
    img: './src/assets/collage5.jpg',
    title: 'Sea star',
  },
  {
    img: './src/assets/collage6.jpg',
    title: 'Bike',
    cols: 2,
  },
];

