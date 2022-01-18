import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useGetLocation } from "../../hooks/useGetLocation";
import { LoadingPage } from "../loading-page";

import { mapStyles } from "./mapStyles";

export function Map() {
  const lat = parseFloat(localStorage.getItem("lat")) || -4.354822541780524;
  const lng = parseFloat(localStorage.getItem("lng")) || -38.851548400797576;
  const [response, setResponse] = useState(null);

  const { coords } = useGetLocation();

  const origin = { lat: coords[0], lng: coords[1] };
  const destination = { lat: lat, lng: lng };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
  });

  const directionsServiceOptions = useMemo(() => {
    return {
      origin,
      destination,
      travelMode: "DRIVING",
    };
  }, [origin, destination]);

  const directionsCallback = useCallback((response) => {
    if (response !== null && response.status === "OK") {
      setResponse(response);
    } else {
      console.log(response);
    }
  }, []);

  const directionsRendererOptions = useMemo(() => {
    return {
      directions: response,
    };
  }, [response]);

  useEffect(() => {}, []);

  return isLoaded ? (
    <GoogleMap
      options={{ styles: mapStyles[0] }}
      mapContainerStyle={{
        width: "100%",
        height: "45vh",
        borderRadius: "1rem",
      }}
      center={origin}
      zoom={15}
    >
      {!response && origin && <Marker position={origin} />}
      {!response && destination && <Marker position={destination} />}

      {origin && destination && (
        <DirectionsService
          options={directionsServiceOptions}
          callback={directionsCallback}
        />
      )}

      {response && <DirectionsRenderer options={directionsRendererOptions} />}
    </GoogleMap>
  ) : (
    <LoadingPage></LoadingPage>
  );
}
