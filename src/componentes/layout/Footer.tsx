function Footer() {

  return (

    <footer className="footer">

      <div className="footer-contenedor">

        {/* DIRECCIONES */}

        <section className="footer-seccion">

          <h3>
            Nuestras Clínicas
          </h3>

          {/* ZONA OESTE */}

          <a
            href="https://www.google.com/maps/search/?api=1&query=Salta+319+Moron"
            target="_blank"
            rel="noopener noreferrer"
            className="link-mapa"
          >

            <div className="direccion">

              <h4>
                 ZONA OESTE
              </h4>

              <p>
                Morón (Salta 319 dpto 4A)
              </p>

            </div>

          </a>

          {/* CAPITAL */}

          <a
            href="https://www.google.com/maps/search/?api=1&query=Roosevelt+2445+Belgrano"
            target="_blank"
            rel="noopener noreferrer"
            className="link-mapa"
          >

            <div className="direccion">

              <h4>
                 CAPITAL
              </h4>

              <p>
                Belgrano (Roosevelt 2445 2C)
              </p>

            </div>

          </a>

          {/* MICROCENTRO */}

          <a
            href="https://www.google.com/maps/search/?api=1&query=Alsina+1170+Buenos+Aires"
            target="_blank"
            rel="noopener noreferrer"
            className="link-mapa"
          >

            <div className="direccion">

              <h4>
                 MICROCENTRO
              </h4>

              <p>
                Alsina 1170 2° piso oficina 202
              </p>

            </div>

          </a>

          {/* ZONA NORTE */}

          <a
            href="https://www.google.com/maps/search/?api=1&query=Paralelo+50+Norte+Pilar"
            target="_blank"
            rel="noopener noreferrer"
            className="link-mapa"
          >

            <div className="direccion">

              <h4>
                 ZONA NORTE
              </h4>

              <p>
                Paralelo 50 Norte
              </p>

              <p>
                Pilar, colectora km 49.5,
                2° piso oficina 223
              </p>

            </div>

          </a>

        </section>

        {/* CONTACTO */}

        <section className="footer-seccion">

          <h3>
            Contáctenos
          </h3>

          <div className="footer-links">

            <a
              href="https://wa.me/5491168234440"
              target="_blank"
              rel="noopener noreferrer"
            >

              WhatsApp

            </a>

            <a
              href="https://instagram.com/estetica.fb"
              target="_blank"
              rel="noopener noreferrer"
            >

              Instagram

            </a>

          </div>

        </section>

      </div>

      <div className="footer-copy">

        <p>
          © 2026 Fast Beauty Medicina Estética
        </p>

      </div>

    </footer>
  );
}

export default Footer;