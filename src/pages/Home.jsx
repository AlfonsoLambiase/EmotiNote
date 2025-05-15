import noteBookAnimation from '../animation/noteBook.json';
import Lottie from 'lottie-react';


const Home = () => {
  return (
    <>
   

 <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200 text-center" >
  <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">EmotiNote</h1>
  <p >
        Benvenuto nel tuo diario personale.
        <br />
        Questo è il tuo spazio sicuro, dove ogni emozione è accolta con
        rispetto.
        <br />
        Qui puoi monitorare il tuo stato d’animo giorno dopo giorno e coltivare
        il tuo benessere emotivo.
        <br />
        Esprimere ciò che provi è il primo passo per prenderti cura di te.
        <br />
        Aiuta la tua salute mentale, ascoltati, scriviti, liberati.
        <br />
        Sentiti libero di essere te stesso, senza filtri né giudizi. Le tue
        emozioni contano.
      </p>
    
        <Lottie 
        animationData={noteBookAnimation} 
        loop={true} 
        autoplay={true} 
        style={{ width:100, height:100 }} 
      />

      </div>
    </>
  );
};
export default Home;
