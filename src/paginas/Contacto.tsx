import Header from "../componentes/layout/Header";
import Footer from "../componentes/layout/Footer";

function Contacto() {

  return (
    <>

      <Header />

      <main className="pagina-contacto">

        {/* HERO */}

        <section className="hero-contacto">

          <h1>
            Contacto
          </h1>

          <p>
            Estamos para asesorarte personalmente
          </p>

        </section>

        {/* INFO */}

        <section className="info-contacto">

          <article>

            <h3>
              WhatsApp
            </h3>

            <p>
              Atención inmediata
            </p>

          </article>

          <article>

            <h3>
              Instagram
            </h3>

            <p>
              @estetica.fb
            </p>

          </article>

          <article>

            <h3>
              Horarios
            </h3>

            <p>
              Lunes a Viernes
            </p>

          </article>

        </section>

        {/* SUCURSALES */}

        <section className="sucursales-contacto">

          <h2>
            Nuestras Sucursales
          </h2>

          <div className="grid-sucursales">

            <article>

              <h3>
                ZONA OESTE
              </h3>

              <p>
                Morón
              </p>

              <p>
                Salta 319 dpto 4A
              </p>

            </article>

            <article>

              <h3>
                CAPITAL
              </h3>

              <p>
                Belgrano
              </p>

              <p>
                Roosevelt 2445 2C
              </p>

            </article>

            <article>

              <h3>
                MICROCENTRO
              </h3>

              <p>
                Alsina 1170
              </p>

              <p>
                2° piso oficina 202
              </p>

            </article>

            <article>

              <h3>
                ZONA NORTE
              </h3>

              <p>
                Paralelo 50 Norte
              </p>

              <p>
                Pilar km 49.5 oficina 223
              </p>

            </article>

          </div>

        </section>

        {/* WHATSAPP */}

        <section className="whatsapp-contacto">

          <h2>
            ¿Querés realizar una consulta?
          </h2>

          <a
            href="https://wa.me/5491111111111"
            target="_blank"
            rel="noopener noreferrer"
            className="boton-whatsapp-grande"
          >

            Consultar por WhatsApp

          </a>

        </section>

        {/* INSTAGRAM */}

        <section className="instagram-contacto">

          <h2>
            Seguinos en Instagram
          </h2>

          <a
            href="https://instagram.com/estetica.fb"
            target="_blank"
            rel="noopener noreferrer"
          >

            @estetica.fb

          </a>

        </section>

      </main>

      <Footer />

    </>
  );
}

export default Contacto;