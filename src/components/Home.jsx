import "../styles/home.css";
import PropTypes from "prop-types";

export default function Home({ titulo, descripcion }) {
  return (
    <>
      <section id="home" className="portada">
        <div className="portada-interior contenedor text-center">
          <h1>{titulo}</h1>

          <p>{descripcion}</p>

          <div className="acciones">
            <a className="boton-cta" href="#contacto">
              <i className="fa-regular fa-calendar-check"></i> Clase de prueba
            </a>

            <a className="boton-secundario" href="#planes">
              <i className="fa-solid fa-medal"></i> Ver planes
            </a>
          </div>
        </div>
      </section>

      <section className="caracteristicas contenedor" aria-label="Servicios principales">
        <h2 className="titulo-seccion">Nuestros servicios</h2>

        <div className="rejilla-caracteristicas">
          <article className="tarjeta-caracteristica">
            <i className="fa-solid fa-person-running"></i>
            <h3>Funcional</h3>
            <p>Fuerza, coordinación y movilidad adaptadas a tu nivel.</p>
            <a
              href="https://www.youtube.com/watch?v=xUG92gfUmHo"
              className="btn btn-danger btn-sm mt-2 btn-palpito"
              target="_blank"
            >
              <i className="fa-brands fa-youtube"></i> Ver video
            </a>
          </article>

          <article className="tarjeta-caracteristica">
            <i className="fa-solid fa-dumbbell"></i>
            <h3>Musculación</h3>
            <p>Rutinas progresivas con control de cargas y seguimiento.</p>
            <a
              href="https://www.youtube.com/watch?v=2BE-_pPcq0E"
              className="btn btn-danger btn-sm mt-2 btn-palpito"
              target="_blank"
            >
              <i className="fa-brands fa-youtube"></i> Ver video
            </a>
          </article>

          <article className="tarjeta-caracteristica">
            <i className="fa-solid fa-heart-pulse"></i>
            <h3>HIIT</h3>
            <p>Intervalos intensos para mejorar tu capacidad aeróbica.</p>
            <a
              href="https://www.youtube.com/watch?v=FeR-4_Opt-g"
              className="btn btn-danger btn-sm mt-2 btn-palpito"
              target="_blank"
            >
              <i className="fa-brands fa-youtube"></i> Ver video
            </a>
          </article>
        </div>
      </section>
    </>
  );
}

Home.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};


