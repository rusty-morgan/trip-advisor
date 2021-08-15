import React, { useState, useEffect } from "react";
import {
  CssBaseline,
  Grid,
  ThemeProvider,
  createTheme,
} from "@material-ui/core";

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

  const [themeState, setThemeState] = useState(
    localStorage.getItem("darkMode") || false
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const afterFilterPlaces = places?.filter(
      (place) => Number(place.rating) > rating
    );
    setFilteredPlaces(afterFilterPlaces);
  }, [rating, places]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setIsLoading(false);
      });
    }
  }, [type, bounds]);

  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

  const lightTheme = createTheme({});

  return (
    <ThemeProvider theme={themeState ? darkTheme : lightTheme}>
      <CssBaseline />
      <Header
        setCoords={setCoords}
        themeState={themeState}
        setThemeState={setThemeState}
      />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={8}>
          <Map
            coords={coords}
            setCoords={setCoords}
            setBounds={setBounds}
            setChild={setChild}
            themeState={themeState}
            places={filteredPlaces?.length ? filteredPlaces : places}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            places={filteredPlaces?.length ? filteredPlaces : places}
            type={type}
            rating={rating}
            child={child}
            setType={setType}
            setRating={setRating}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
