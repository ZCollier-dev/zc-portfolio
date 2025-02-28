import "../styles/Button.css";

function Button(props: { name: string }) {
  return <button>{props.name}</button>;
}

export default Button;
