import React, {useState} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, } from '@material-ui/core';

import Details from '../Details/Details';

import useStyles from './styles'
const List = ({places}) => {
  const classes = useStyles();
  const [type, setType] = useState('restaurants');
  const [ratings, setRatings] = useState('');

  // const places = [
  //   {name: "Comfy Bed"},
  //   {name: "Tasty Meal"},
  //   {name: "Cool Place"},
  //   {name: "Allah's Blessings"},
  //   {name: "God's Touch"},
  //   {name: "Quiet Place"},
  //   {name: "Degrees"},
  //   {name: "Health Priority"},
  // ]

  return (
    <div className={classes.container}>
      <Typography variant="h5">Restaurants, Hotels, Attractions, Mosques, Churches, Libraries, Colleges & Hospitals Close By</Typography>

      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value= {type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
          <MenuItem value="mosques">Mosques</MenuItem>
          <MenuItem value="churches">Churches</MenuItem>
          <MenuItem value="libraries">Libraries</MenuItem>
          <MenuItem value="colleges">Colleges</MenuItem>
          <MenuItem value="hospitals">Hospitals</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Ratings</InputLabel>
        <Select value= {ratings} onChange={(e) => setRatings(e.target.value)}>
          <MenuItem value="0">All</MenuItem>
          <MenuItem value="3">Above 3.0</MenuItem>
          <MenuItem value="4">Above 4.0</MenuItem>
          <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <Details place={place} />
          </Grid>
         ))}
      </Grid>
    </div>
  );
}

export default List;