import React from "react";
import GoogleMapReact from "google-map-react";

import useStyles from "./styles";
import { LocationOnRounded } from "@material-ui/icons";

import darkMapTheme from "./darkMap";

const Map = ({
  coords,
  setCoords,
  setBounds,
  setChild,
  places,
  themeState,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: themeState ? darkMapTheme : null,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChild(child);
        }}
      >
        {places?.map((place, i) => (
          <div
            key={i}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            className={classes.markerContainer}
          >
            <LocationOnRounded className={classes.pointer} />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
