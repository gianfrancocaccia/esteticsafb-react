import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../componentes/layout/Header";
import Footer from "../../componentes/layout/Footer";
import "../../estilos/servicioestilo.css/Reservas.css";

function BellezaFacial() {
  const navigate = useNavigate();
  const [loadingTratamiento, setLoadingTratamiento] = useState<string | null>(null);

  const precios: Record<string, number> = {
    "Toxina Botulinica": 60,
    "Rellenos de Hiluronico": 60,
    "Faciales y corporales": 50,
    "Bioestimuladores": 80,
    "Suero Terapia": 45
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
          <h1>Medicina Estética</h1>
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

export default BellezaFacial;