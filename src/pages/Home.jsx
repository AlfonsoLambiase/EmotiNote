import noteBookAnimation from '../animation/noteBook.json';
import Lottie from 'lottie-react';

const Home = () => {
  return (
    <>
   

    <div className="flex justify-center items-center text-center p-5">
      <p>
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
      </div>

       <div className='fit-content'>
        <Lottie 
        animationData={noteBookAnimation} 
        loop={true} 
        autoplay={true} 
        style={{ width: 200, height: 200 }} 
      />
    </div>
    </>
  );
};
export default Home;
