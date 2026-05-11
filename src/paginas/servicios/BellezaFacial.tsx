import Header from "../../componentes/layout/Header";
import Footer from "../../componentes/layout/Footer";

function BellezaFacial() {

  return (
    <>

      <Header />

      <main className="pagina-servicio">

        <section className="hero-servicio">

          <h1>
            Belleza Facial
          </h1>

        </section>

<section className="tratamientos">
  <article>
    <h3>Toxina Botulinica</h3>
  </article>

  <article>
    <h3>Rellenos de Hiluronico</h3>
  </article>

  <article>
    <h3>Faciales y corporales</h3>
  </article>

  <article>
    <h3>Bioestimuladores</h3>
  </article>

  <article>
    <h3>Suero Terapia</h3>
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

export default BellezaFacial;