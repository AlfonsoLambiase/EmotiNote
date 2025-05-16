import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200 text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Seguici sui Social</h1>
      <p className="text-gray-600 mb-4">
        Resta aggiornato con le ultime novità e contenuti!
      </p>



      <div className="flex justify-center gap-6 text-3xl text-gray-700 mb-3">
        <p className="text-[25px]">Alfonso Lambiase:</p>
        <a
          href="https://www.instagram.com/__alphonso__/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/alfonso-lambiase-b3107733a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AlfonsoLambiase"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/alfonso.lambiase.3344/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </div>

      <div className="flex justify-center gap-6 text-3xl text-gray-700">
        <p className="text-[25px] ml-5">Natascia Rufino:</p>
        <a
          href="https://www.instagram.com/natasciarufino/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/natascia-rufino-694279346/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Natasciaruf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/natascia.rufino.7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
