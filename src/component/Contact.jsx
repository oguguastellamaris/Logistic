import React from 'react'
import Form from './Form'
import call from '../assets/call.png'
import watsap from '../assets/whatsapp.png'
import sms from '../assets/sms.png'



function Contact() {
  return (
    <>
    <div className="cover">
      <div className="container text-light pt-3 text-center">
        <h1 className='pt-5'>Contact</h1>
        <p>Home <i class="fa fa-arrow-right" aria-hidden="true"></i>Contact</p>

      </div>

    </div>

    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6" data-aos="fade-up">
          <p>Kindly call us or join our support group on WhatsApp.</p>
          <p><img src={call} alt="" /> +234 9072211222</p>
          <p><img src={watsap} alt="" /> +234 8167000077</p>
          <p><img src={sms} alt="" /> info@crystalshipment.com</p>

        </div>
        <div className="col-md-6" data-aos="fade-up">
          <Form/>
        </div>
      </div>
    </div>



    </>
  )
}

export default Contact