import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api";

import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(0);

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
    const afterFilterPlaces = places.filter(
      (place) => Number(place.rating) > rating
    );
    setFilteredPlaces(afterFilterPlaces);
    console.log(rating);
  }, [rating]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setIsLoading(false);
        console.log(places);
      });
    }
  }, [type, bounds]);

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
            places={filteredPlaces.length ? filteredPlaces : places}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            rating={rating}
            child={child}
            setType={setType}
            setRating={setRating}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
