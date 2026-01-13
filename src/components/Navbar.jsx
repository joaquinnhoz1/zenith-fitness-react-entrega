import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header className="encabezado">
      <nav className="navbar navbar-expand-lg navbar-dark sombra-fina sticky-top encabezado">
        <div className="container d-flex justify-content-center align-items-center">

          <a className="navbar-brand fw-bold" href="#home">
            <i className="fa-solid fa-dumbbell"></i> Zenith Fitness
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#home">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#planes">Planes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#galeria">Galería</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}
