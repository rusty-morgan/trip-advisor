import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";

import useStyles from './styles';

const Map = ({ coords, setCoords, setBounds }) => {
  const classes = useStyles();
  const isMoblie = useMediaQuery('min-width: 600px'); 

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyCds6f50cal4ANZZKyZGrOLhYD5ZoCP2oc'}}
        center={coords}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={(e)=>{
          setCoords({lat: e.center.lat, lng: e.center.lng});
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
        }}
        onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  );
};

export default Map;
