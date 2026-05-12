import { useLocation } from "react-router-dom";
import Header from "../componentes/layout/Header";
import Footer from "../componentes/layout/Footer";

function Gracias() {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const tratamiento = params.get("tratamiento") || "tu tratamiento";

  return (
    <>
      <Header />

      <main
  style={{
    minHeight: "140vh",       // ocupa casi toda la altura de la pantalla
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // centra verticalmente
    alignItems: "center",
    gap: "20px",
    textAlign: "center",
    padding: "20px"
  }}
>
  <h2>Pago confirmado</h2>
  <p>Contactanos para coordinar tu turno</p>

  <a
    href={`https://wa.me/5491158837864?text=Hola,%20realicé%20el%20pago%20de%20la%20seña%20para%20${encodeURIComponent(tratamiento)}.`}
    target="_blank"
    rel="noopener noreferrer"
    className="boton-whatsapp"
  >
    Ir a WhatsApp
  </a>
</main>

      <Footer />
    </>
  );
}

export default Gracias;