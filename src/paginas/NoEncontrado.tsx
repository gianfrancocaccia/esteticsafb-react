import { Link } from "react-router-dom";

function NoEncontrado() {

  return (

    <main className="no-encontrado">

      <h1>
        404
      </h1>

      <p>
        Página no encontrada
      </p>

      <Link to="/">
        Volver al inicio
      </Link>

    </main>
  );
}

export default NoEncontrado;