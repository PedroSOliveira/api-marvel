import hammer from "../../assets/martelo-de-thor.png";

import "./styles.scss";

export function LoadingPage() {
    return (
        <div className="loading">
            <img className="hammer-img" src={hammer} alt="Hammer" />
            <h1>Loading...</h1>
        </div>
    )
}