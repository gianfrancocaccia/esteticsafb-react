import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from ".././componentes/layout/Header";
import Footer from ".././componentes/layout/Header";
import "../../src/estilos/Servicio.css";

function ElegirSucursal() {
  const navigate = useNavigate();
  const { state } = useLocation(); // recibe tratamiento y price

  if (!state || !state.tratamiento) {
    navigate("/servicios");
    return null;
  }

  const { tratamiento, price } = state;

  const sucursales = [
    "Moron - Salta 319",
    "Belgrano - Roosevelt 2445",
    "Microcentro - Alsina 1170",
    "Pilar - Paralelo 50 Norte"
  ];

  const [sucursalSeleccionada, setSucursalSeleccionada] = useState("");

  const handleConfirm = async () => {
    if (!sucursalSeleccionada) {
      alert("Seleccioná una sucursal");
      return;
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/create_preference`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: tratamiento,
            price: price,
            sucursal: sucursalSeleccionada
          })
        }
      );
      const data = await res.json();

      localStorage.setItem(
  "tratamiento",
  tratamiento
);

localStorage.setItem(
  "sucursal",
  sucursalSeleccionada
);

      window.location.href = data.init_point;
    } catch (error) {
      console.log(error);
      alert("Error iniciando pago");
    }
  };

  return (
    <>
      <Header />

      <main className="pagina-servicio">
        <h2>Elegir sucursal</h2>

        <div className="lista-sucursales">
          {sucursales.map((sucursal) => (
            <label
              key={sucursal}
              className={`boton-sucursal ${
                sucursalSeleccionada === sucursal ? "activo" : ""
              }`}
            >
              <input
                type="radio"
                name="sucursal"
                value={sucursal}
                checked={sucursalSeleccionada === sucursal}
                onChange={() => setSucursalSeleccionada(sucursal)}
              />
              {sucursal}
            </label>
          ))}
        </div>

        <button className="boton-confirmar" onClick={handleConfirm}>
          Confirmar
        </button>
      </main>

      <Footer />
    </>
  );
}

export default ElegirSucursal;