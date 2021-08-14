import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api";

import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";

function App() {
  const [places, setPlaces] = useState([]);

  const [coords, setCoords] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState(null);

  const [child, setChild] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (bounds) {
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        console.log(data);

        setPlaces(data);
      });
    }
  }, [bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%", paddingTop: "64px" }}>
        <Grid item xs={12} md={8}>
          <Map
            coords={coords}
            setCoords={setCoords}
            setBounds={setBounds}
            setChild={setChild}
            places={places}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <List places={places} child={child} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
