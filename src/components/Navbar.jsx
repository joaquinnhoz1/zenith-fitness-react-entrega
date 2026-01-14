import { useEffect, useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const ids = ["home", "planes", "galeria", "contacto"];

  useEffect(() => {
    const getNavHeight = () => {
      const header = document.querySelector(".encabezado");
      return header ? header.offsetHeight : 0;
    };

    const computeActive = () => {
      const navH = getNavHeight();
      const scrollPos = window.scrollY + navH + 5;

      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        if (el.offsetTop <= scrollPos) {
          current = id;
        }
      }

      setActive(current);
    };

    const onScroll = () => computeActive();

    computeActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", computeActive);

    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (ids.includes(hash)) setActive(hash);
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", computeActive);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const goTo = (id) => (e) => {
    e.preventDefault();
    setActive(id);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }
  };

  const cls = (id) => `nav-link ${active === id ? "active" : ""}`;

  return (
    <header className="encabezado">
      <div className="contenedor nav-inner">
        <a className="navbar-brand" href="#home" onClick={goTo("home")}>
          <i className="fa-solid fa-dumbbell"></i> Zenith Fitness
        </a>

        <nav className="nav-links">
          <a className={cls("home")} href="#home" onClick={goTo("home")}>
            Inicio
          </a>
          <a className={cls("planes")} href="#planes" onClick={goTo("planes")}>
            Planes
          </a>
          <a
            className={cls("galeria")}
            href="#galeria"
            onClick={goTo("galeria")}
          >
            Galería
          </a>
          <a
            className={cls("contacto")}
            href="#contacto"
            onClick={goTo("contacto")}
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
