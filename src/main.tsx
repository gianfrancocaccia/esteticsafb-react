import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./estilos/global.css";
import "./estilos/header.css";
import "./estilos/inicio.css";
import "./estilos/servicios.css";
import "./estilos/footer.css";
import "./estilos/contacto.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);