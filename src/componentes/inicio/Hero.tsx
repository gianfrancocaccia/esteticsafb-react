function Hero() {

  return (

    <section className="hero">

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="video-hero"
      >

        <source
          src="/videos/videoParcial.mp4"
          type="video/mp4"
        />

      </video>

      <div className="overlay-hero">

        <h1>
          Medicina Estética
        </h1>

        <p>
          Belleza facial, odontología y cirugía plástica
        </p>

      </div>

    </section>
  );
}

export default Hero;