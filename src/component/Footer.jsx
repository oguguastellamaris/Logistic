import React from 'react'
import gallery1 from '../assets/box-man.png'
import gallery2 from '../assets/driving-man.png'
import gallery3 from '../assets/brown-box.png'
import gallery4 from '../assets/folklift.jpg'

function Footer() {
  return (
    <>
    <div className="bg-dark text-light mt-5 py-5" >
      <div className="container">
        <div className="row ">
          <div className="col-md-3">
          <h4>CRYSTAL SHIPMENT</h4>
          <p>Crystal Shipment Services is a global supplier of transport and logistics solutions. We have offices in more than 20 countries and an international network of partners and agents. </p>
          </div>
          <div className="col-md-2">
          <h4>QUICK LINKS</h4>
          <ul className='list-unstyled'>
            <li><a href="" className='text-light text-decoration-none' >All Services</a></li>
            <li><a href="" className='text-light text-decoration-none'>Land Freight</a></li>
            <li><a href="" className='text-light text-decoration-none'>Sea freight</a></li>
            <li><a href="" className='text-light text-decoration-none'>Air freight</a></li>
          </ul>
          </div>
          <div className="col-md-4">
          <h4>PHOTO GALLERY</h4>
          <div className="d-flex">
            <div className="flex-grow-1 mb-3 me-3">
            <img src={gallery1} alt="" className='img-fluid' />
            </div>
            <div className="flex-grow-1 mb-3 ms-2">
            <img src={gallery2} alt="" className='img-fluid' />
            </div>
          </div>
          <div className="d-flex mt-3 " >
            <div className="flex-grow-1 mb-3 me-3">
            <img src={gallery3} alt="" className='img-fluid' />
            </div>
            <div className="flex-grow-1 mb-3 ms-2">
            <img src={gallery4} alt="" className='img-fluid' />
            </div>
          </div>
          </div>
          <div className="col-md-3">
          <h4>OUR NEWSLETTER</h4>
          <p>Sign up today for tips and latest news and exclusive special offers.</p>
          <input type="email" placeholder='Enter your email' className='form-control mb-3 mt-3' />
          <button className='btn btn-danger'>Submit</button>
          </div>
        </div>
        <p className='text-center mt-4'>
        © Copyright 2023 All Right Reserved.
        </p>
      </div>    
    </div>
    </>
  )
}

export default Footer