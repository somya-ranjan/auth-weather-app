import React from "react";
import { Card, CardBody } from "reactstrap";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useSelector } from "react-redux";

// // static import
import NoData from "../../component/noData/NoData";
import { VITE_APP_MAP_KEY } from "../../utility/envConfig";
import "./style.scss";

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: VITE_APP_MAP_KEY,
  });

  // // redux state
  const { weatherData } = useSelector((state) => state?.weather);

  // // local state
  const center = {
    lat: weatherData?.city?.coord?.lat,
    lng: weatherData?.city?.coord?.lon,
  };

  // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);
  return (
    <Card className="my-2 my-sm-4 my-md-0 mb-md-2 map_hero_section bg_primary text_primary">
      <CardBody className="p-0">
        {!weatherData ? (
          <NoData />
        ) : (
          isLoaded && (
            <GoogleMap
              // mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              // onLoad={onLoad}
              // onUnmount={onUnmount}
              id="map_container"
            />
          )
        )}
      </CardBody>
    </Card>
  );
}

export default Map;
