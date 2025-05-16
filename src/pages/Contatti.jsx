
const Contatti = () => {
 
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Contatti</h1>

      {/* Informazioni di contatto */}
      <ul className="text-left space-y-3 text-gray-700 text-sm sm:text-base mb-8">
        <li>📍 <strong>Indirizzo:</strong> Via Filangieri, Cava de' Tirreni (SA)</li>
        <li>
          📞 <strong>Telefono:</strong>{" "}
          <a href="tel:+39800001002" className="text-blue-600 hover:underline">
            +39 3295364212
          </a>
        </li>
        <li>
          📧 <strong>Email:</strong>{" "}
          <a href="#" className="text-blue-600 hover:underline">
           Lambiase1199@gmail.com
          </a> 
        </li>
        <li>🕒 <strong>Orari di supporto:</strong> Lun–Ven, 9:00–18:00</li>
        <li>
           <strong>🧾 Acconsento il trattamento dei dati personali</strong>
        </li>
      </ul>
    </div>
  );
};

export default Contatti;
