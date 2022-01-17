import "./styles.scss";

export function Card({ title, image }) {
  return (
    <div className="content-card">
      {/* <div className="card" style={{backgroundImage}}></div> */}
      <img className="card" src={image} alt={title} />
      <footer>
        <p
          onClick={() => {
            navigator.clipboard.writeText(title);
          }}
        >
          {title}
        </p>
        <span>{title}</span>
      </footer>

    </div>
  );
}
