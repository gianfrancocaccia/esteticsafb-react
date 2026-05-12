import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Header() {

  return (

    <header className="header">

      <div className="logo">
        <Link to="/" >
        <img
          src="/img/logo2.png"
          alt="logoclinica"
          className="logo-img"
        />
</Link>
      </div>

      <Navbar />

    </header>
  );
}

export default Header;