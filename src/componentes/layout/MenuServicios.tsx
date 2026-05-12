import { Link } from "react-router-dom";

function MenuServicios() {

  return (
    <div className="menu-servicios">

      <Link to="/cirugia-plastica">
        Cirugía Plástica
      </Link>

      <Link to="/belleza-facial">
       Medicina Estética
      </Link>

      <Link to="/odontologia">
        Odontología
      </Link>

    </div>
  );
}

export default MenuServicios;