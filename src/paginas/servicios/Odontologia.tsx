import Header from "../../componentes/layout/Header";
import Footer from "../../componentes/layout/Footer";

function Odontologia() {

  return (
    <>

      <Header />

      <main className="pagina-servicio">

        <section className="hero-servicio">

          <h1>
            Odontología
          </h1>

        </section>

<section className="tratamientos">
        <article>
          <h3>
            Carillas Dentales
          </h3>
        </article>

        <article>
          <h3>Implantes</h3>
        </article>

        <article>
          <h3>Blanqueamiento Dental</h3>
        </article>

        <article>
          <h3>
            Protesis Extraibles
          </h3>
        </article>

        <article>
<h3>
  Cirugias Maxilo Faciales
</h3>
        </article>

        <article>
          <h3>
            Bichectomia
          </h3>
        </article>
</section>
<div style={{display: "flex", justifyContent:"center"}}>
  <a
  href="https://wa.me/5491111111111"
  target="_blank"
  rel="noopener noreferrer"
  className="boton-whatsapp"
>

  Consultar por WhatsApp

</a>
      
</div>
</main>

      <Footer />

    </>
  );
}

export default Odontologia;