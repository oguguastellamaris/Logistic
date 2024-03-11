import React from 'react'
import Arrow from '../assets/arrow-right.png'

function Tracking() {
  return (
  <>
      <div className="cover pt-3 text-light text-center">
        <h1 className='pt-5'>Tracking</h1>
        <p>Home <i class="fa fa-arrow-right" aria-hidden="true"></i>Tracking</p>
        
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6" data-aos="fade-up">
            <h2 className='my-3'>TRACK YOUR SHIPMENT</h2>
            <div className="bg-red mb-3"></div>
            <p>If you require maximum visibility to your Freight transactions, contact our logistic customer team or you can track your cargo by using below tracking system.</p>

          </div>
          <div className="col-md-6" data-aos="fade-up">
            <input type="number" className='form-control'placeholder='Enter your Tracking ID' />
            <a href="" className='btn btn-danger mt-5'>Track</a>
          </div>
        </div>
      </div>
        
  </>
  )
}

export default Tracking