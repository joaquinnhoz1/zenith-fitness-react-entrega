import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CardPlan from "./components/CardPlan";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Home
  titulo="Entrená con confianza"
  descripcion="Planes personalizados, máquinas modernas y profesores certificados. Ambiente seguro y motivador."
/>

     <section id="planes" className="seccion-planes">

  <h2 className="titulo-seccion">Nuestros Planes</h2>

  <div className="rejilla-planes">

    <CardPlan
  imagen="/src/assets/g1.jpg"
  titulo="Básico"
  descripcion="Acceso al gimnasio"
  precio="$8.000"
/>

<CardPlan
  imagen="/src/assets/g2.jpg"
  titulo="Intermedio"
  descripcion="Acceso + clases"
  precio="$12.000"
/>

<CardPlan
  imagen="/src/assets/g3.jpg"
  titulo="Premium"
  descripcion="Todo incluido"
  precio="$18.000"
/>


  </div>
</section>


      <Gallery imagenes={[
        "/src/assets/g1.jpg",
        "/src/assets/g2.jpg",
        "/src/assets/g3.jpg",
        "/src/assets/g4.jpg",
        "/src/assets/g5.jpg",
        "/src/assets/g6.jpg"
      ]} />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
