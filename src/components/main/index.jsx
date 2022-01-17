import { Aside } from "../aside";
import { Button } from "../button";
import { Footer } from "../footer";

import "./styles.scss";

export function Main() {
  return (
    <section className="main">
      <main className="content">
        <div className="picture-filter">
          <div className="content-footer">
            <h1>Vingadores: Ultimato</h1>
            <Button title="Enviar" />
          </div>
        </div>
        <Aside />
      </main>

      <footer>
        <Footer>
          <h1>page</h1>
        </Footer>
      </footer>
    </section>
  );
}
