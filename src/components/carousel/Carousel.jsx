import { useState } from "react";

import "./carousel.css";

const Carousel = () => {

  // const minusSlide =(n)=>{
  //   console.log(n);
  // }
  // const plusSlides =(n)=>{
  //   console.log(n);
  // }
  // console.log(currentSlide(n));
  // const [showSlides, setShowSlides] = useState(1);
  // setShowSlides(showSlides);

  // function plusSlides(n) {
  //   setShowSlides((showSlides += n));
  // }

  // function currentSlide(n) {
  //   setShowSlides((showSlides = n));
  // }

  /*
    function slides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        showSlides = 1;
      }
      if (n < 1) {
        showSlides = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[showSlides - 1].style.display = "block";
      dots[showSlides - 1].className += " active";
    }
  */
  return (
    <div className="carousel">
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src="img_nature_wide.jpg" style="width:100%" />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src="img_snow_wide.jpg" style="width:100%" />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src="img_mountains_wide.jpg" style="width:100%" />
          <div className="text">Caption Three</div>
        </div>

        {/* <a class="prev" onClick={minusSlide(-1)}>
          ❮
        </a>
        <a class="next" onClick={plusSlides(1)}>
          ❯
        </a> */}
      </div>
      <br />

      <div style="text-align:center">
        {/* <span class="dot" onClick={currentSlide('1')}></span>
        <span class="dot" onClick={currentSlide('2')}></span>
        <span class="dot" onClick={currentSlide('3')}></span> */}
      </div>
    </div>
  );
};

export default Carousel;
