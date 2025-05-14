import { useRef, useState } from "react";
import relaxSound from "../assets/relaxSound.mp3";
import Play from "../assets/play";
import Mute from "../assets/Mute";

const Mp3 = () => {
  const audioRef = useRef(null); // File audio
  const [isPlaying, setIsPlaying] = useState(false); // Stato per sapere se il brano è in play o pausa
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Se sta giocando, metti in pausa
    } else {
      audioRef.current.play(); // Se non sta giocando, avvia
    }
    setIsPlaying(!isPlaying); // Cambia stato (da play a pausa o viceversa)
  };

  return (
    <div
      onClick={handlePlayPause}
      className="cursor-pointer w-20 h-20 bg-orange-400 rounded-full shadow-lg m-5 flex items-center justify-center
             hover:bg-orange-500 active:scale-95 transition duration-200 ease-in-out"
    >
      <button>
        {isPlaying ? <Mute /> : <Play />} {/* Testo play o pause */}
      </button>
      <audio ref={audioRef} src={relaxSound} loop />
    </div>
  );
};

export default Mp3;
