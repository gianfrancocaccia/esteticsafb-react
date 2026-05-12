import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Inicio from "../paginas/Inicio";

import CirugiaPlastica from "../paginas/servicios/CirugiaPlastica";
import BellezaFacial from "../paginas/servicios/BellezaFacial";
import Odontologia from "../paginas/servicios/Odontologia";

import Contacto from "../paginas/Contacto";

import Gracias from "../paginas/Gracias";

import ScrollToTop from "../componentes/ScrollToTop";

import NoEncontrado from "../paginas/NoEncontrado";

import WhatsAppFloat from "../componentes/WhatsAppFloat";

import Servicios from "../../src/paginas/Servicios"

import ElegirSucursal from "../paginas/ElegirSucursal";

function RutasApp() {

  return (

    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route
          path="/"
          element={<Inicio />}
        />

        <Route
          path="/cirugia-plastica"
          element={<CirugiaPlastica />}
        />

        <Route
          path="/belleza-facial"
          element={<BellezaFacial />}
        />

        <Route
          path="/odontologia"
          element={<Odontologia />}
        />



        <Route
          path="/contacto"
          element={<Contacto />}
        />

        <Route
          path="/gracias"
          element={<Gracias />}
        />

        <Route
path="/elegir-sucursal"
element={<ElegirSucursal/>} />


        <Route
          path="*"
          element={<NoEncontrado />}
        />
<Route
  path="/servicios"
  element={<Servicios />}
/>

      </Routes>
<WhatsAppFloat />
    </BrowserRouter>
  );
}

export default RutasApp;