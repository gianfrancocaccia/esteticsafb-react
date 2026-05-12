import { Link } from "react-router-dom";

import Header from "../componentes/layout/Header";
import Footer from "../componentes/layout/Footer";

import "../estilos/Servicio.css";

function Servicios() {

  return (

    <>

      <Header />

      <main className="pagina-servicios">

        <div className="contenido-servicios">



          <nav className="links-servicios">

            <Link to="/cirugia-plastica">
              Cirugía Plástica
            </Link>

            <Link to="/belleza-facial">
              Medicina Estética
            </Link>

            <Link to="/odontologia">
              Odontología
            </Link>

          </nav>

        </div>

      </main>

      <Footer />

    </>

  );

}

export default Servicios;