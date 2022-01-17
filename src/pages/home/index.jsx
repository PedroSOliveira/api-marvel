import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Sidebar } from "../../components/sidebar";

import "./styles.scss";

export function Home() {
  return (
    <section className="home">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="header">
        <Header renderInput={true} />
      </div>
      <div className="main">
        <Main />
      </div>
    </section>
  );
}

