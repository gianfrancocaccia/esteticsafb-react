import Navbar from "./Navbar";

function Header() {

  return (

    <header className="header">

      <div className="logo">

        <img
         
          alt="logoclinica"
          style={{ width: "170px" }}
        />

      </div>

      <Navbar />

    </header>
  );
}

export default Header;