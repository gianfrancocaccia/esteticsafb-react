
import Header from "../componentes/layout/Header";

function Gracias() {

const tratamiento =
  localStorage.getItem(
    "tratamiento"
  );

const sucursal =
  localStorage.getItem(
    "sucursal"
  );


  return (
    <>
      <Header />

      <main style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        textAlign: "center",
        padding: "20px",
        marginTop: "140px"
      }}>
        <h2>Pago confirmado</h2>
        <p>Contactanos para coordinar tu turno</p>

     <a
  href={`https://wa.me/5491158837864?text=Hola,%20saqué%20turno%20en%20${encodeURIComponent(sucursal || "")}%20para%20${encodeURIComponent(tratamiento || "")}.`}
  target="_blank"
  rel="noreferrer"
  style={{marginTop: "90px"}}
>
  Enviar comprobante por WhatsApp
</a>
      </main>


    </>
  );
}

export default Gracias;