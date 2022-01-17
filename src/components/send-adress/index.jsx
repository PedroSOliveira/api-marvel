import { useCallback, useEffect, useState } from "react";
import { Button } from "../button";

import { useGetLocation } from "../../hooks/useGetLocation";

import iron from "../../assets/iron-animation.png";

import Geocode from "react-geocode";

import "./styles.scss";

export function SendAdress({ renderInput }) {
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
    <aside>
      <div className="aside-favorities">
        <h1>Herói favorito</h1>
        <div className="aside-list">
          <img className="iron" src={iron} alt="Iron animation" />
          <img className="iron" src={iron} alt="Iron animation" />
          <img className="iron" src={iron} alt="Iron animation" />
          <img className="iron" src={iron} alt="Iron animation" />
        </div>
      </div>
      <div className="aside-adress">
        <h1>Cadastrar endereço de envio</h1>
        <input
          placeholder="Cadastrar endereço de envio"
          onChange={(e) => setAdressSend(e.target.value)}
        />
        <Button title="Cadastrar" onClick={handleSaveAdressSend} />
      </div>
    </aside>
  );
}
