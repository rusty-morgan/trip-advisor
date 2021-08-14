import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";

import useStyles from './styles';

const Map = () => {
  const classes = useStyles();
  const isMoblie = useMediaQuery('min-width: 600px'); 

  const coords = {lat: 53.122236, lng: 17.997486};

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyCds6f50cal4ANZZKyZGrOLhYD5ZoCP2oc'}}
        defaultCenter={coords}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  );
};

export default Map;
