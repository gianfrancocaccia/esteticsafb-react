import Header from "../componentes/layout/Header";

import Hero from "../componentes/inicio/Hero";
import SobreNosotros from "../componentes/inicio/SobreNosotros";
import ServiciosInicio from "../componentes/inicio/ServiciosInicio";
import Horarios from "../componentes/inicio/Horarios";
import Locales from "../componentes/inicio/Locales";

import Footer from "../componentes/layout/Footer";

function Inicio() {

  return (
    <>

      <Header />

      <main>

        <Hero />

        <SobreNosotros />

        <ServiciosInicio />

        <Horarios />

        <Locales />

      </main>

      <Footer />

    </>
  );
}

export default Inicio;