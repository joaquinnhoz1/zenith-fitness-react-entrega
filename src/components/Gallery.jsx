import "../styles/gallery.css";

export default function Gallery({ imagenes }) {
  return (
    <section id="galeria" className="seccion-galeria contenedor">
      <h2 className="titulo-seccion">Galería</h2>

      <div className="rejilla-galeria">
        {imagenes.map((img, index) => (
          <img key={index} src={img} alt={`foto-${index}`} className="item-galeria" />
        ))}
      </div>
    </section>
  );
}
