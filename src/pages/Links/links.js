import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import data from "./data";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './style.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Modal from "./modal";


function Links() {
    const [modal, setModal] = useState(false);
    const [tempData, setTempData] = useState([]);

    const getData = (img, title, desc, md) => {
        let tempData = [img, title, desc, md];
        setTempData(item => [1, ...tempData]);

        return setModal(true);
    };

    const toggleModal = () => {
      setModal(!modal)
    };
  
    if(modal) {document.body.classList.add('active-modal')
    } else {document.body.classList.add('active-modal')};

    var settings = {
        dots: true,
        infinite: true,
        speed: 850,
        slidesToShow: 5,
        slidesToScroll: 3,
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
        <>
            <Header />

            <div className="carousel">
            <h2>Cast of Oppenheimer</h2>
                <Slider {...settings}>
                  {data.cardData.map((item, index)=>{
                    return(
                      <div className="container">
                        <div className="card">
                          <button className="btn" 
                          onClick={() => getData(item.imgSrc, item.title, item.desc, item.mdSrc)}>
                            <img src={item.imgSrc} className="card-img-top"/>
                          </button>
                          <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <h1 className="card-desc">{item.desc}</h1>
                            <img src={item.mdSrc} className="card-modal"/>
                            
                          </div>

                        </div>
                      </div>
                    )



                  })}
                
                </Slider>
            </div>

            {
              modal === true ? <Modal img={tempData[1]} title={tempData[2]} desc={tempData[3]} mdSrc={tempData[4]} hide={() => setModal(false)} /> : ''
            }

            <Footer />
            
        </>
    )
}

export default Links;