import React from 'react'
import pic1 from '../assets/pic1.jpg'

import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import frame1 from '../assets/frame1.png'
import frame2 from '../assets/frame1.png'
import frame3 from '../assets/frame1.png'
import Form from './Form'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const cardsData = [
    { image: pic1, title:"Air Freight", content: 'As a leader in global air freight forwarding, OIA Global excels in providing tailore...'},
    { image: pic2, title:"Sea Freight", content: 'Sea Freight plays perhaps the most vital role in most transportation and supply chain...'},
    { image: pic3, title:"Land Freight", content: 'Cargo are transported at some stage of their journey along the world’s roads where...'},
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // breakpoint for desktop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // breakpoint for tablet/mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
        <div className="hero">

          <div className="container text-light pt-5">
            <div className='pt-5 text-center'>
              <h1 className='pt-5'>Easy & Quick Cargo Shipping Services </h1>
            <p>Book low cost sea freight shipping services. Get an instant quote.</p>
            <a href="#" className='btn btn-danger'>Track Goods Here</a>
            </div>
            
          </div>
        </div>


        <div className="container text-center mt-4" data-aos="fade-up">
          <h2>Welcome to Crystal Shipment</h2>
          <div className="bg-red mx-auto"></div>
          <p className='mt-3'>Crystal Shipment is more than logistics. We can also optimize your packaging, manage your materials sourcing, and so much more.</p>
        </div>


        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-md-6">
              <img src={pic1} alt="" />
            </div>
            <div className="col-md-6">
              <p className="text-danger">TRANSPORTATION COMPANY </p>
              <h2>We Provide Full Range Logistics Solution</h2>
              <p>We strongly believe that pursuing all of these goals is in our interest and in the interest of all of our stakeholders are us customers, employees, investors and the planet as a whole. We add value to cargo people’s interaction with us, with excellent services or products. Engaging our employees and nurture investment on the stock holds market we show concern , by engaging our employees and nurture investment on the stock holds market we show concern.
              </p>
              <a href="" className="btn btn-danger">Learn More</a>
            </div>
          </div>
        </div>


        <div className="container mt-5">
          <div className="text-center" data-aos="fade-up">
            <p className="text-danger">TYPES OF LOGISTICS</p>
            <h2>Covering All Logistics Fields</h2>
          </div>
          <div>
            <div className='mt-5'>
            <section className="row">
            <Slider {...settings}>
            {cardsData.map((card, index) => (
          <div key={index} className="col-md-4 mb-5">
             <div className="slider-item" style={{ marginRight: '1rem' }}>
             <div className="card">
              <img src={card.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title ">{card.title}</h4>
                <p className="card-text">{card.content}
                <a href="#" className="text-danger" style={{textDecoration:'none'}}>Read more</a></p>
              </div>
            </div>
             </div>
          </div>
        ))}
              </Slider>

               </section>
            </div>
          </div>
          <div className="text-center ">
          <a href="" className="btn btn-danger">Load More</a>
          </div>
             
            
        </div>


        <div className="bg-warning mt-5">
          <div className="container" data-aos="fade-up">
          <div className=" row d-flex justify-content-center pt-5">
            <div className="col-md-8">
              <h3>Delivering your world one package at a time</h3>
              <p>Crystal Shipment is more than logistics.
              </p>
            </div>
            <div className="col-md-4">
              <a href="" className="btn btn-danger">Request A Quote</a>
            </div>
          </div>
          </div>

        </div>

        <div className="container mt-5" >
          <div className="row">
            <div className="col-md-6" data-aos="fade-up">
              <h3>WHY CHOOSE US?</h3>
              <div className="d-inline-flex">
                <div className="flex-grow-1 me-2">
                  <img src={frame1} alt="" />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h5>Global supply Chain Solutions</h5>
                  <p>Efficiently unleash cross-media information without cross-media value.</p>
                </div>
              </div>

              <div className="d-flex">
                <div className="flex-grow-1 me-2">
                  <img src={frame2} alt="" />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h5>Mobile Shipment Tracking</h5>
                  <p>We Offers intelligent concepts for road and tail and well as complex special transport services</p>
                </div>
              </div>


              <div className="d-flex">
                <div className="flex-grow-1 me-2">
                  <img src={frame3} alt="" />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h5>Careful Handling of Valuable Goods</h5>
                  <p>Cargo HUB are transported at some stage of their journey along the world’s roads</p>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <h3>REQUEST A QUOTE</h3>
             <Form/>
            </div>
          </div>
        </div>

        


    </>
  )
}

export default Home