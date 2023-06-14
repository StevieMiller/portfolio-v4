import logo from "../images/logo.webp";

export default function Logo() {
  return (
    <div className="brand">
      <img src={logo} className="logo" alt="logo" />
      <h4>Stevie Miller</h4>
    </div>
  );
}
