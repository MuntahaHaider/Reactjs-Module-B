import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import image1 from '/src/assets/collage1.jpg';
import image2 from '/src/assets/collage2.jpg';
import image3 from '/src/assets/collage3.jpg';
import image4 from '/src/assets/collage4.jpg';
import image5 from '/src/assets/collage5.jpg';
import image6 from '/src/assets/collage6.jpg';

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
        margin: 'auto',
        width: {
          sm: 300,
          md: 400,
          lg: 1000,
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
    img: image1,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: image2,
    title: 'Burger',
  },
  {
    img: image3,
    title: 'Camera',
  },
  {
    img: image4,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: image5,
    title: 'Hats',
    cols: 2,
  },
  {
    img: image6,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: image1,
    title: 'Basketball',
  },
  {
    img: image2,
    title: 'Fern',
  },
  {
    img: image3,
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: image4,
    title: 'Tomato basil',
  },
  {
    img: image5,
    title: 'Sea star',
  },
  {
    img: image6,
    title: 'Bike',
    cols: 2,
  },
];
