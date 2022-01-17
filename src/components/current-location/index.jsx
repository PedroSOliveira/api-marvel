import { useCallback, useEffect, useState } from "react";

import { useGetLocation } from "../../hooks/useGetLocation";

import Geocode from "react-geocode";

import { BiMap } from "react-icons/bi";
import "./styles.scss";

export function CurrentLocation() {
  const [currentAdress, setCurrentAdress] = useState("Minha posição Atual");

  const { coords } = useGetLocation();

  const loadCurrentAddress = useCallback(async (lat, lng) => {
    Geocode.setApiKey("AIzaSyBYx0apkMkxJtZm4u_nG8K7glNn0XsnQaw");
    Geocode.setLanguage("pt-br");
    Geocode.setRegion("br");

    const responseGeoCode = await Geocode.fromLatLng(lat, lng);
    const currentLocation = `${responseGeoCode.results[0].address_components[3]?.long_name} - ${responseGeoCode.results[0].address_components[4]?.short_name}`;
    setCurrentAdress(currentLocation);
  }, []);

  useEffect(() => {
    if (coords) {
      const lat = coords[0];
      const lng = coords[1];

      loadCurrentAddress(lat.toString(), lng.toString());
    }
  }, [coords, loadCurrentAddress]);

  return (
    <div className="header-location">
      <p>
        <BiMap /> {currentAdress}
      </p>
    </div>
  );
}
