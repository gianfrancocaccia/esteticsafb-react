import { useState } from "react";
import Header from "../../componentes/layout/Header";
import Footer from "../../componentes/layout/Footer";
import "../../estilos/servicioestilo.css/Reservas.css";

function BellezaFacial() {

  const [loadingTratamiento, setLoadingTratamiento] = useState<string | null>(null);

  const precios: Record<string, number> = {
    "Toxina Botulinica": 60,
    "Rellenos de Hiluronico": 60,
    "Faciales y corporales": 50,
    "Bioestimuladores": 80,
    "Suero Terapia": 45
  };

  const comprar = async (tratamiento: string) => {

    setLoadingTratamiento(tratamiento);

    try {

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/create_preference`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            title: tratamiento,
            price: precios[tratamiento]
          })
        }
      );

      const data = await res.json();

      await new Promise(r => setTimeout(r, 1000));

      window.location.href = data.init_point;

    } catch (error) {

      console.log(error);

      setLoadingTratamiento(null);

      alert("Error iniciando pago");

    }

  };

  return (
    <>
      <Header />

      <main className="pagina-servicio">

        <section className="hero-servicio">
          <h1>Belleza Facial</h1>
        </section>

        <section className="tratamientos">

          {Object.keys(precios).map(tratamiento => (

            <article key={tratamiento}>

              <h3>{tratamiento}</h3>

              <p>
                ${precios[tratamiento].toLocaleString()}
              </p>

              <button
                onClick={() => comprar(tratamiento)}
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