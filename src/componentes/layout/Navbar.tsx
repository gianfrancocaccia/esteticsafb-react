import { useState } from "react";

import MenuServicios from "./MenuServicios";

function Navbar() {

  const [abierto, setAbierto] =
    useState<boolean>(false);

  return (
    <nav className="navbar">

      <a href="/">
        Inicio
      </a>

      <button
        onClick={() => setAbierto(!abierto)}
      >
        Servicios 
      </button>

      <a href="contacto">
        Contacto
      </a>

      {
        abierto &&
        <MenuServicios />
      }

    </nav>
  );
}

export default Navbar;