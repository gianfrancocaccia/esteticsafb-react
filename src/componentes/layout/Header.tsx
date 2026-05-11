import Navbar from "./Navbar";

function Header() {

  return (

    <header className="header">

      <div className="logo">

       <img
  src="/img/logo2.png"
  alt="logoclinica"
  className="logo-img"
/>

      </div>

      <Navbar />

    </header>
  );
}

export default Header;
