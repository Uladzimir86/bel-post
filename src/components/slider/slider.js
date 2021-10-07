import './slider.scss';
import Carousel from 'nuka-carousel';
import Image1 from '../../assets/images/image1.png';
import Image2 from '../../assets/images/image2.png';

const Slider = () => {

  return (
    <Carousel 
      defaultControlsConfig={({ 
        nextButtonClassName: "slider__btn slider__btn_right",
        prevButtonClassName: "slider__btn slider__btn_left",
        pagingDotsStyle: {display: "none"}
      })}
    >
      <img src= {Image1} alt="title bel post"/>
      <img src= {Image2} alt="title bel post"/>
    </Carousel>
  );
}

export default Slider;