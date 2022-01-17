import "./styles.scss";

export function Button({ title, ...rest }) {

  return <button className="button" {...rest}>{title}</button>;
}
