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
          path="*"
          element={<NoEncontrado />}
        />

      </Routes>
<WhatsAppFloat />
    </BrowserRouter>
  );
}

export default RutasApp;