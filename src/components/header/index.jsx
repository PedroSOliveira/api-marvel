import { useCallback, useEffect, useState } from "react";
import { Button } from "../button";

import { useGetLocation } from "../../hooks/useGetLocation";

import Geocode from "react-geocode";

import { BiMap } from "react-icons/bi";

import "./styles.scss";

export function Header({ renderInput }) {
  const [latitudeAdress, setLatitudeAdress] = useState(0);
  const [longitudeAdress, setLongitudeAdress] = useState(0);
  const [currentAdress, setCurrentAdress] = useState("Minha posição Atual");
  const [adressSend, setAdressSend] = useState(
    "Prefeitura de Baturité - Centro, Baturité - CE"
  );

  const { coords } = useGetLocation();

  const handleSaveAdressSend = () => {
    console.log("aqui");
    localStorage.clear();
    localStorage.setItem("lat", latitudeAdress);
    localStorage.setItem("lng", longitudeAdress);
  };

  const loadCurrentAddress = useCallback(async (lat, lng) => {
    Geocode.setApiKey("AIzaSyBYx0apkMkxJtZm4u_nG8K7glNn0XsnQaw");
    Geocode.setLanguage("pt-br");
    Geocode.setRegion("br");

    const responseGeoCode = await Geocode.fromLatLng(lat, lng);
    const currentLocation = `${responseGeoCode.results[0].address_components[3]?.long_name} - ${responseGeoCode.results[0].address_components[4]?.short_name}`;
    setCurrentAdress(currentLocation);
  }, []);

  const loadLatLongAdressSend = useCallback(async (adressSend) => {
    Geocode.setApiKey("AIzaSyBYx0apkMkxJtZm4u_nG8K7glNn0XsnQaw");
    Geocode.setLanguage("pt-br");
    Geocode.setRegion("br");

    const responseGeoCode = await Geocode.fromAddress(adressSend);
    const lat = `${responseGeoCode.results[0].geometry.location.lat}`;
    const lng = `${responseGeoCode.results[0].geometry.location.lng}`;

    setLatitudeAdress(lat);
    setLongitudeAdress(lng);
  }, []);

  useEffect(() => {
    if (coords) {
      const lat = coords[0];
      const lng = coords[1];

      loadCurrentAddress(lat.toString(), lng.toString());
    }

    loadLatLongAdressSend(adressSend);
  }, [coords, loadCurrentAddress, adressSend, loadLatLongAdressSend]);

  return (
    <section className="header">
      <div className="header-filter">
        {renderInput ? (
          <>
            <input
              placeholder="Cadastrar endereço de envio"
              onChange={(e) => setAdressSend(e.target.value)}
            />
            <Button title="Cadastrar" onClick={handleSaveAdressSend} />
          </>
        ) : (
          <h1>Mapa</h1>
        )}
      </div>

      <div className="header-location">
        <p>
          <BiMap /> {currentAdress}
        </p>
      </div>
    </section>
  );
}
