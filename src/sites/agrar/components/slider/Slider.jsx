import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImage1 from '../../assets//img/carousel/olma.jpg'
import './slider.css'

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="container">
      <Slider {...settings}>
      <div className="image">
          <img src={SliderImage1} alt="" />
        </div>
        <div>
          <img src={SliderImage1} alt="" />
        </div>
        <div>
          <img src={SliderImage1} alt="" />
        </div>
        <div>
          <img src={SliderImage1} alt="" />
        </div>
        <div>
          <img src={SliderImage1} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
