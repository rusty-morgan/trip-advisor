import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";
import ListItem from "./ListItem";

const List = ({ places, child }) => {
  const classes = useStyles();
  const [type, setType] = useState("hotels");
  const [rating, setRating] = useState(0);
  console.log({ child });
  return (
    <div className={classes.container}>
      <Typography variant="h5">Hotels, Restaurants & Attractions</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <ListItem place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
