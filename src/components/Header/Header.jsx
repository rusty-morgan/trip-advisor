import React from "react";

import { AppBar, Box, Toolbar, Typography, InputBase } from "@material-ui/core";
import { Autocomplete } from "@react-google-maps/api";
import { Search } from "@material-ui/icons";

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography varian="h6" className={classes.title}>
            Something about app
          </Typography>
          {/* <Autocomplete> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search"
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
