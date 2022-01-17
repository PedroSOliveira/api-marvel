import { ContentMap } from "../../components/content-map";
import { Header } from "../../components/header";
// import { Main } from "../../components/main";
import { Sidebar } from "../../components/sidebar";

import "./styles.scss";

export function MapPage() {
  return (
    <section className="home">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <ContentMap />
      </div>
    </section>
  );
}

