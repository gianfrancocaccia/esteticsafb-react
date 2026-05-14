import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../componentes/layout/Header";
import Footer from "../../componentes/layout/Footer";
import "../../estilos/servicioestilo.css/Reservas.css";

function CirugiaPlastica() {
  const navigate = useNavigate();
  const [loadingTratamiento, setLoadingTratamiento] = useState<string | null>(null);

  const precios: Record<string, number> = {
    "Rinoplastia": 60000,
    "Liposucción": 60000,
    "Mamoplastia": 60000,
    "Mela": 60000,
    "Lipoescultura": 60000,
    "Abdominoplastia": 60000,
    "Implantes Mamarios": 60000,
    "Reseccion Costal": 6000
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
             <p className="precio-servicio">
  ${precios[tratamiento].toLocaleString()}
</p>

<span className="texto-reserva">
  Pago correspondiente a consulta
</span>
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