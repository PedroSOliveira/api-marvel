import { Button } from "../button";

import iron from "../../assets/iron-animation.png";
// import thor from "../../assets/iron-animation.png";

import "./styles.scss";

export function Aside() {
  return (
    <aside>
      <div className="aside-favorities">
      <h1>Herói favorito</h1>
        {/* <h1>Favoritie heroe</h1> */}
        <div className="aside-list">
        <img className="iron" src={iron} alt="Iron animation" />
        <img className="iron" src={iron} alt="Iron animation" />
        <img className="iron" src={iron} alt="Iron animation" />
        <img className="iron" src={iron} alt="Iron animation" />
        </div>
      </div>
      <div className="aside-adress">
        <h1>Cadastrar endereço de envio</h1>
        <input placeholder="Endereço de envio" />
        <Button title="Cadastrar" />
      </div>
    </aside>
  );
}
