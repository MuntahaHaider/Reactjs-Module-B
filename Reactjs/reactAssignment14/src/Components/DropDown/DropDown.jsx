import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

export default function DropDown() {
  const [Category, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Category</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={Category}
        label="All Products"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>All Products </em>
        </MenuItem>
        <MenuItem value={10}>jewellery</MenuItem>
        <MenuItem value={20}>electronics</MenuItem>
        <MenuItem value={30}> women's clothing</MenuItem>
        <MenuItem value={10}>men's clothing</MenuItem>
      </Select><br />
      <Typography sx={{fontSize:15}}>Select category according to your prefrences</Typography>
    </FormControl>
  );
}
