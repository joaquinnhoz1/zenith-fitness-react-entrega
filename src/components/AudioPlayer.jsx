import { useEffect, useRef, useState } from "react";
import "../styles/audio-player.css";

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.10;
    audio.muted = true;

    const tryPlay = async () => {
      try {
        await audio.play();
        setReady(true);
      } catch {
        setReady(false);
      }
    };

    tryPlay();
  }, []);

  const toggleMute = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    const nextMuted = !muted;
    setMuted(nextMuted);
    audio.muted = nextMuted;

    if (!nextMuted) {
      try {
        await audio.play();
        setReady(true);
      } catch {
        setReady(false);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/assets/musica.mp3" />
      <button
        className={`audio-fab ${muted ? "is-muted" : "is-on"}`}
        onClick={toggleMute}
        type="button"
        aria-label={muted ? "Activar sonido" : "Silenciar"}
        title={muted ? "Activar sonido" : "Silenciar"}
      >
        {muted ? "🔇" : "🔊"}
        <span className="audio-fab-text">
          {muted ? "Activar" : "Mute"}
        </span>
      </button>

      {!ready && (
        <div className="audio-hint">
          Tocá “Activar” para habilitar el audio
        </div>
      )}
    </>
  );
}
