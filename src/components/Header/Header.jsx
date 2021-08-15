import React, { useState } from "react";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { Autocomplete } from "@react-google-maps/api";
import { Brightness2, Brightness5, Search } from "@material-ui/icons";

import useStyles from "./styles";

const Header = ({ setCoords, themeState, setThemeState }) => {
  const classes = useStyles();

  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => {
    setAutocomplete(autoC);
  };
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords(lat, lng);
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <FormControlLabel
            control={
              <Switch
                checked={Boolean(themeState)}
                onChange={() => {
                  setThemeState(!themeState);
                  localStorage.setItem("darkMode", !themeState);
                }}
                name="theme"
                color="secondary"
              />
            }
            label={themeState ? <Brightness5 /> : <Brightness2 />}
          />

          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search"
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
