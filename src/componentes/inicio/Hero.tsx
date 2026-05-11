import { useEffect, useRef, useState } from "react";

function Hero() {

  const videos = [

    "/videos/videoUno.MP4",

    "/videos/videoDos.MP4",

    "/videos/videoTres.MP4",

    "/videos/videoCuatro.mp4",

    "/videos/videoSeis.mp4",

    "/videos/videoSiete.mp4"

  ];

  const [videoActual, setVideoActual] =
    useState<number>(0);

  const videoRef =
    useRef<HTMLVideoElement | null>(null);

  useEffect(() => {

    const video = videoRef.current;

    if (video) {

      video.play().catch(() => {});

    }

  }, [videoActual]);

  useEffect(() => {

    const intervalo = setInterval(() => {

      setVideoActual((prev) =>

        prev === videos.length - 1
          ? 0
          : prev + 1

      );

    }, 6000);

    return () => clearInterval(intervalo);

  }, [videos.length]);

  return (

    <section className="hero">

      <video
        ref={videoRef}
        key={videoActual}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="video-hero"
      >

        <source
          src={videos[videoActual]}
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
