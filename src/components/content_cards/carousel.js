import React, { useState } from "react";
import './styles.css';
import './style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from '../../assets/Cast/img1.jpg'
import img2 from '../../assets/Cast/img2.jpeg'
import img3 from '../../assets/Cast/img3.jpg'
import img4 from '../../assets/Cast/img4.jpg'
import img5 from '../../assets/Cast/img5.jpg'
import img6 from '../../assets/Cast/img6.jpg'
import img7 from '../../assets/Cast/img7.jpg'
import img8 from '../../assets/Cast/img8.jpg'
import img9 from '../../assets/Cast/img9.jpg'
import img10 from '../../assets/Cast/img10.jpg'
import img11 from '../../assets/Cast/img11.jpg'
import img12 from '../../assets/Cast/img12.jpg'
import img13 from '../../assets/Cast/img13.jpg'
import img14 from '../../assets/Cast/img14.jpg'
import md14 from '../../assets/Cast/modals/md14.jpg'




function Carousel() {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
      setModal(!modal)
  };

  if(modal) {document.body.classList.add('active-modal')
  } else {document.body.classList.add('active-modal')};


    var settings = {
        dots: true,
        infinite: true,
        speed: 850,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
      <div className="carousel">
          <h2>Cast of Oppenheimer</h2>
      
          <Slider {...settings}>
            <div className="box">
              <img id="img" src={img1} alt="imgact"></img>
              <h3>Cillian Murphy as J. Robert Oppenheimer</h3>
            </div>

            <div className="box">
              <img id="img" src={img2} alt="imgact"></img>
              <h3>Emily Blunt as Katherine "Kitty" Oppenheimer</h3>
            </div>

            <div className="box">
              <img id="img" src={img3} alt="imgact"></img>
              <h3>Matt Damon as Leslie Groves</h3>
            </div>

            <div className="box">
              <img id="img" src={img4} alt="imgact"></img>
              <h3>Robert Downey Jr. as Lewis Strauss</h3>
            </div>

            <div className="box">
              <img id="img" src={img5} alt="imgact"></img>
              <h3>Florence Pugh as Jean Tatlock</h3>
            </div>

            <div className="box">
              <img id="img" src={img6} alt="imgact"></img>
              <h3>Tom Conti is Albert Einstein</h3>
            </div>
            
            <div className="box">
              <img id="img" src={img7} alt="imgact"></img>
              <h3>David Dastmalchian as William Borden</h3>
            </div>

            <div className="box">
              <img id="img" src={img8} alt="imgact"></img>
              <h3>Josh Hartnett as Ernest Lawrence</h3>
            </div>

            <div className="box">
              <img id="img" src={img9} alt="imgact"></img>
              <h3>Kenneth Branagh as Niels Bohr</h3>
            </div>

            <div className="box">
              <img id="img" src={img10} alt="imgact"></img>
              <h3>David Krumholtz as Isidor Isaac Rabi</h3>
            </div>

            <div className="box">
              <img id="img" src={img12} alt="imgact"></img>
              <h3>Rami Malek as David L. Hill</h3>
            </div>

            <div className="box">
              <img id="img" src={img11} alt="imgact"></img>
              <h3>Benny Safdie as Edward Teller</h3>
            </div>

            <div className="box">
              <img id="img" src={img13}></img>
              <h3>Tony Goldwyn as Gordon Gray</h3>
            </div>

            <div className="box">
              <button onClick={toggleModal} className="btn-modal">
                <img id="img" src={img14} alt="imgact"></img>
              </button>
              <h3>Jason Clarke as Roger Robb</h3>
            </div>

            
          </Slider>
          {modal &&(
              <div className="modal">
                  <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                      <img id="md" src={md14} alt="imgact"></img>
                      <p>Jason Clarke, the Australian star of Zero Dark Thirty and the Pet Sematary remake, portrays the relentless Robb, special counsel to the Atomic Energy Commission who, in Oppenheimer, interrogates many of the movie's main characters including those played by Murphy, Damon, and Blunt. "I was genuinely surprised with Jason Clarke," Damon told EW. "The first time I sat in that room and was cross-examined by him... [he was] intimidating. It was great."</p>
                      <button className="close-modal" onClick={toggleModal}>X</button>
                  </div>
              </div>
              )};

      </div> 
    )
}

export default Carousel;