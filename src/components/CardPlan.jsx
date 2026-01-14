import "../styles/cardplan.css";

export default function CardPlan({ imagen, titulo, descripcion, precio }) {
  return (
    <div className="tarjeta-plan">

      <img src={imagen} alt={titulo} />

      <div className="cuerpo-tarjeta">
        <h3>{titulo}</h3>

        <p>{descripcion}</p>

        <strong className="precio">{precio}</strong>

        <button className="btn-late">
          Elegir plan
        </button>
      </div>

    </div>
  );
}
