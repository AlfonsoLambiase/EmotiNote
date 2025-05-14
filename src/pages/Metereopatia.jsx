import sunnyAnimation from '../animation/sunny.json';
import rainyAnimation from '../animation/rainy.json';
import cloudyAnimation from '../animation/cloudy.json';
import snowlyAnimation from '../animation/snowly.json';
import Lottie from 'lottie-react';

const Metereopatia = ()=>{
    return(
        <>
      <div className='fit-content'>
        <Lottie 
        animationData={sunnyAnimation} 
        loop={true} 
        autoplay={true} 
        style={{ width: 200, height: 200 }} 
      />
    </div>

     <div className='fit-content'>
            <Lottie 
            animationData={rainyAnimation} 
            loop={true} 
            autoplay={true} 
            style={{ width: 200, height: 200 }} 
          />
        </div>

         <div className='fit-content'>
        <Lottie 
        animationData={cloudyAnimation} 
        loop={true} 
        autoplay={true} 
        style={{ width: 200, height: 200 }} 
      />
    </div>

     <div className='fit-content'>
            <Lottie 
            animationData={snowlyAnimation} 
            loop={true} 
            autoplay={true} 
            style={{ width: 200, height: 200 }} 
          />
        </div>
        </>
    )
};

export default Metereopatia;