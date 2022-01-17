import { BiHome, BiHappyHeartEyes, BiMapAlt } from "react-icons/bi";
import logo from "../../assets/marvel-logo.svg";
import spider from "../../assets/spider-real.png";

import { Link } from "react-router-dom";

// import { useHistory } from "react-router-dom";

import "./styles.scss";

export function Sidebar() {
  // const history = useHistory();

  // const handleNavigatorToHome = () => history.push("/");

  // const handleNavigatorToMap = () => history.push("/map");

  return (
    <section className="sidebar">
      <img className="sidebar-logo" src={logo} alt="Logo marvel" />
      <img className="spider" src={spider} alt="Logo marvel" />

      <div className="sidenav">
        <Link className="sidenav-item" to="/">
          <BiHome className="icon-light" />
          <p>Home</p>
        </Link>

        <Link className="sidenav-item" to="/map">
          <BiMapAlt className="icon-light" />
          <p>Mapa</p>
        </Link>

        <Link className="sidenav-item" to="/">
          <BiHappyHeartEyes className="icon-light" />
          <p>Meus</p>
        </Link>

        <Link className="sidenav-item" to="/">
          <BiHome className="icon-light" />
          <p>Tema</p>
        </Link>
      </div>
    </section>
  );
}
