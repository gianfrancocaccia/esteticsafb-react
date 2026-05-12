import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../componentes/layout/Header";
import Footer from "../../componentes/layout/Footer";
import "../../estilos/servicioestilo.css/Reservas.css";

function CirugiaPlastica() {
  const navigate = useNavigate();
  const [loadingTratamiento, setLoadingTratamiento] = useState<string | null>(null);

  const precios: Record<string, number> = {
    "Rinoplastia": 250,
    "Liposucción": 300,
    "Mamoplastia": 280,
    "Mela": 120,
    "Lipoescultura": 320,
    "Abdominoplastia": 350,
    "Implantes Mamarios": 290,
    "Reseccion Costal": 400
  };

  const reservar = (tratamiento: string, precio: number) => {
    setLoadingTratamiento(tratamiento);
    navigate("/elegir-sucursal", { state: { tratamiento, price: precio } });
  };

  return (
    <>
      <Header />

      <main className="pagina-servicio">
        <section className="hero-servicio">
          <h1>Cirugía Plástica</h1>
        </section>

        <section className="tratamientos">
          {Object.keys(precios).map(tratamiento => (
            <article key={tratamiento}>
              <h3>{tratamiento}</h3>
              <p>${precios[tratamiento].toLocaleString()}</p>
              <button
                onClick={() => reservar(tratamiento, precios[tratamiento])}
                className="link-servicio"
              >
                Reservar consulta ahora
                {loadingTratamiento === tratamiento && (
                  <span className="linea-carga" />
                )}
              </button>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default CirugiaPlastica;