import { useState, useEffect } from "react";

const defaultCords = [24.113760426128486, -77.55911660747587];

export function useGetLocation() {
  const [coords, setCoords] = useState(0);

  useEffect(() => {
    function onGetLocationSucess(position) {
      setCoords([position.coords.latitude, position.coords.longitude]);
    }

    function onGetLocationError() {
      setCoords(defaultCords);
    }
    try {
      navigator.geolocation.getCurrentPosition(
        onGetLocationSucess,
        onGetLocationError
      );
    } catch (err) {
      setCoords(defaultCords);
    }
  }, []);

  return { coords };
}