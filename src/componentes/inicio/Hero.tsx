import { useEffect, useRef } from "react";

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log("Autoplay bloqueado:", err);
      });
    }
  }, []);

  return (
    <section className="hero">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"   // 👈 imagen estática
        className="video-hero"
      >
        <source src="/videos/videoCuatro.mp4" type="video/mp4" />
      </video>

      <div className="overlay-hero">
        <h1>Medicina Estética</h1>
        <p>Medicina Estética, odontología y cirugía plástica</p>
      </div>
    </section>
  );
}

export default Hero;



