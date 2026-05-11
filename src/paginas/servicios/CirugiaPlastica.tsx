import Header from "../../componentes/layout/Header";
import Footer from "../../componentes/layout/Footer";

function CirugiaPlastica() {

  return (
    <>

      <Header />

      <main className="pagina-servicio">

        <section className="hero-servicio">

          <h1>
            Cirugía Plástica
          </h1>

        </section>

        <section className="tratamientos">

          <article>
            <h3>Rinoplastia</h3>
          </article>

          <article>
            <h3>Liposucción</h3>
          </article>

          <article>
            <h3>Mamoplastia</h3>
          </article>

          <article>
            <h3>Mela</h3>
            <p>mini extraccion lipidica ambulatoria</p>
          </article>

<article>
  <h3>Lipoescultura</h3>
</article>

<article>
  <h3>Abdominoplastia</h3>
</article>

<article>
  <h3>Implantes Mamarios</h3>
</article>

<article>
  <h3>Reseccion Costal</h3>
</article>

<article>
  <h3>Rinoplastia</h3>
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

export default CirugiaPlastica;