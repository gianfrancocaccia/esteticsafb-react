import { Link } from "react-router-dom";



function ServiciosInicio() {

  return (

    <section className="servicios-inicio">

      <h2>
        Nuestros Servicios
      </h2>

      <div className="grid-servicios">

        {/* CIRUGÍA */}

        <Link to="/cirugia-plastica">

          <article className="tarjeta-servicio">

            <video
              autoPlay
              muted
              loop
              playsInline
              className="video-servicio"
               preload="auto"
              
            >

              <source
                src="/videos/videoUno.mp4"
                type="video/mp4"
              />

            </video>

            <h3>
              Cirugía Plástica
            </h3>

          </article>

        </Link>

        {/* BELLEZA FACIAL */}

        <Link to="/belleza-facial">

          <article className="tarjeta-servicio">

            <video
              autoPlay
              muted
              loop
              playsInline
              className="video-servicio"
               preload="auto"
           
            >

              <source
                src="/videos/videoOcho.mp4"
                type="video/mp4"
              />

            </video>

            <h3>
              Medicina Estética
            </h3>

          </article>

        </Link>

        {/* ODONTOLOGÍA */}

        <Link to="/odontologia">

          <article className="tarjeta-servicio">

            <video
              autoPlay
              muted
              loop
              playsInline
              className="video-servicio"
               preload="auto"
          
            >

              <source
                src="/video/videoDos.mp4"
                type="video/mp4"
              />

            </video>

            <h3>
              Odontología
            </h3>

          </article>

        </Link>
 
 
      </div>

      <Link
  to="/servicios"
  className="boton-turno"
>
  Reserva tu turno
</Link>

    </section>
  );
}

export default ServiciosInicio;