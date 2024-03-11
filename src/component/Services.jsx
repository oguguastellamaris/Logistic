import React from 'react'
import Arrow from '../assets/arrow-right.png'
import Card from './Card'
import pic7 from '../assets/pic7.png'

function Services() {
  return (
    <>
    <div className="cover">
      <div className="container">
      <div className="text-center pt-3 text-light">
             <h1 className='pt-5'>Services</h1>
             {/* <p>Home <img src={Arrow} alt="" /> Services </p>  */}
             <p>Home <i class="fa-solid fa-arrow-right"></i> Services</p>
      </div>

      </div> 
    </div>
    <div className="container mt-4" data-aos="fade-up">
      <Card/>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-6" data-aos="fade-up">
          <img src={pic7} alt=""  className='img-fluid'/>
        </div>
        <div className="col-md-6" data-aos="fade-up">
          <h2>THE COMPLETE SOLUTION</h2>
          <div className="bg-red"></div>
          <p>Our warehousing services are known nationwide to be one of the most reliable, safe and affordable, because we take pride in delivering the best of warehousing services, at the most reasonable prices. Pleasure and praising pain was born and I will give you a complete account of system, and expound actual teachings occasionally circumstances.</p>
        </div>

      </div>
    </div>
    
    
    
    </>
  )
}

export default Services