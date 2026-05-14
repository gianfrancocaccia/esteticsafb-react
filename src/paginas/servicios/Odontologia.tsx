import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../componentes/layout/Header";
import Footer from "../../componentes/layout/Footer";
import "../../estilos/servicioestilo.css/Reservas.css";

function Odontologia() {

  const navigate = useNavigate();
  const [loadingTratamiento, setLoadingTratamiento] = useState<string | null>(null);

  // Lista de tratamientos y precios
  const precios: Record<string, number> = {
    "Carillas Dentales": 60000,
    "Implantes": 60000,
    "Blanqueamiento Dental": 60000,
    "Protesis Extraibles": 60000,
    "Cirugias Maxilo Faciales": 60000,
    "Bichectomia": 60000
  };

  // Cuando el usuario hace click en "Reservar ahora"
  const reservar = (tratamiento: string, precio: number) => {
    setLoadingTratamiento(tratamiento);

    // Redirige a la página de elegir sucursal, pasando tratamiento y precio en state
    navigate("/elegir-sucursal", {
      state: { tratamiento, price: precio }
    });
  };

  return (
    <>
      <Header />

      <main className="pagina-servicio">

        <section className="hero-servicio">
          <h1>Odontología</h1>
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
              <a
                onClick={() => reservar(tratamiento, precios[tratamiento])}
                className="link-servicio"
              >
                Reservar consulta ahora
                {loadingTratamiento === tratamiento && (
                  <span className="linea-carga" />
                )}
              </a>
            </article>
          ))}

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Odontologia;