import { ContentMap } from "../../components/content-map";
import { CurrentLocation } from "../../components/current-location";

import { Sidebar } from "../../components/sidebar";

import "./styles.scss";

export function MapPage() {
  return (
    <section className="home">
      <div className="sidebar">
        <Sidebar />
      </div>
      <section className="header">
        <div className="header-filter">
          <h1>Mapa</h1>
        </div>
        <CurrentLocation />
      </section>
      <div className="main">
        <ContentMap />
      </div>
    </section>
  );
}
