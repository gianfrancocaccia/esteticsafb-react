import { Link } from "react-router-dom";

function ServiciosInicio() {

  return (

    <section className="servicios-inicio">

      <h2 className="titulo-servicios">
        Nuestros Servicios
      </h2>

      <div className="grid-servicios">

        {/* CIRUGÍA */}

        <Link
          to="/cirugia-plastica"
          className="link-tarjeta"
        >

          <article className="tarjeta-servicio">

            <video
              src="/videos/videoUno.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="video-servicio"
            />

            <h3 className="titulo-tarjeta">
              Cirugía Plástica
            </h3>

            <p className="texto-reserva">
              Pago correspondiente a reserva/seña
            </p>

          </article>

        </Link>

        {/* MEDICINA ESTÉTICA */}

        <Link
          to="/belleza-facial"
          className="link-tarjeta"
        >

          <article className="tarjeta-servicio">

            <video
              src="/videos/videoOcho.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="video-servicio"
            />

            <h3 className="titulo-tarjeta">
              Medicina Estética
            </h3>

            <p className="texto-reserva">
              Pago correspondiente a reserva/seña
            </p>

          </article>

        </Link>

        {/* ODONTOLOGÍA */}

        <Link
          to="/odontologia"
          className="link-tarjeta"
        >

          <article className="tarjeta-servicio">

            <video
              src="/videos/videoDos.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="video-servicio"
            />

            <h3 className="titulo-tarjeta">
              Odontología
            </h3>

            <p className="texto-reserva">
              Pago correspondiente a reserva/seña
            </p>

          </article>

        </Link>

      </div>

      <div className="contenedor-boton-turno">

        <Link
          to="/servicios"
          className="boton-turno"
        >
          Reserva tu turno
        </Link>

      </div>

    </section>
  );
}

export default ServiciosInicio;