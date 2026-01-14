import "../styles/floating-buttons.css";

export default function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="fb-btn instagram"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a
        href="mailto:info@zenithfitness.com"
        aria-label="Email"
        className="fb-btn mail"
      >
        <i className="fa-solid fa-envelope"></i>
      </a>

      <a
        href="https://wa.me/5491112345678"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fb-btn whatsapp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </div>
  );
}