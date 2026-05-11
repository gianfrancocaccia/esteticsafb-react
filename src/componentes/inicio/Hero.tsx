import{ useEffect, useRef } from "react";

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
        className="video-hero"
      >
        <source src="/videos/0511-3.mp4" type="video/mp4" />
      </video>

      <div className="overlay">
        <h1>Medicina Estética</h1>
        <p>Belleza facial, odontología y cirugía plástica</p>
      </div>
    </section>
  );
}

export default Hero;


