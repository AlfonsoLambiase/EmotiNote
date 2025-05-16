const FAQ = () => {
    return (
        <>
        <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200 text-center">

      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Domande Frequenti (FAQ)</h1>

      <div className="space-y-6 text-gray-700 text-sm">
        <div>
          <h2 className="font-semibold text-lg">📝 Come posso registrare un'emozione?</h2>
          <p>Accedi alla sezione "Daily Mood" e inserisci come ti senti, indicando il tuo stato d’animo. L’emozione verrà automaticamente registrata nel tuo "Diario".</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">☀️ Cosa fa il test sulla metereopatia?</h2>
          <p>Il test analizza le condizioni meteo locali e ti permette di registrare quanto il clima influisce sul tuo stato d’animo.</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">📍 Come viene rilevata la mia posizione?</h2>
          <p>L'app ti chiederà di inserire almeno uno tra CAP, città o paese per determinare la tua posizione e mostrarti il meteo locale.</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">🌤️ Da dove provengono le informazioni meteo?</h2>
          <p>Le previsioni e le condizioni attuali sono fornite da Open-Meteo, un servizio accurato e gratuito.</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">🔐 I miei dati sono al sicuro?</h2>
          <p>Sì, tutte le informazioni inserite restano private sul tuo dispositivo, a meno che tu non scelga di condividerle. Rispettiamo la tua privacy.</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">💬 Posso cancellare un'emozione registrata?</h2>
          <p>Certo! Puoi eliminare ogni voce in qualsiasi momento dalla sezione “Diario”.</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">❓A chi posso rivolgermi per supporto?</h2>
          <p>Puoi contattarci tramite la pagina <a href="/Contatti" className="text-blue-500 underline">Contatti</a> oppure scrivendo a Lambiase1199@gmail.com</p>
        </div>
      </div>
    </div>

     
        </>
    )
}

export default FAQ;