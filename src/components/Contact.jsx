import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // 👉 requerido por el PDF

    // Validación simple
    if (!nombre || !email || !mensaje) {
      alert("Completá todos los campos");
      return;
    }

    // 👉 mostrar datos en consola (PDF lo pide)
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);

    setEnviado(true);
  };

  const handleReset = () => {
    setNombre("");
    setEmail("");
    setMensaje("");
    setEnviado(false);
  };

  return (
    <section id="contacto" className="seccion-contacto contenedor">
      <h2 className="titulo-seccion">Contacto</h2>

      {!enviado ? (
        <form className="form-contacto" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            rows="5"
            placeholder="Mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />

          <div className="acciones-contacto">
            <button type="submit" className="boton">
              Enviar mensaje
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="boton-secundario"
            >
              Resetear
            </button>
          </div>
        </form>
      ) : (
        <>
          <h3>¡Gracias por contactarte, {nombre}! 💪</h3>

          <button onClick={handleReset} className="boton-secundario">
            Enviar otro mensaje
          </button>
        </>
      )}
    </section>
  );
}
