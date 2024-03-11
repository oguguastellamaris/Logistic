import React from 'react'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.1.png'
import pic5 from '../assets/pic5.png'
import pic6 from '../assets/pic6.png'


function Card() {

    const cardsData = [
        { image: pic1, title:"Air Freight", content: 'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation...'},
        { image: pic2, title:"Sea Freight", content: 'Sea Freight plays perhaps the most vital role in most transportation and supply chain a solutions...'},
        { image: pic3, title:"Land Freight", content: 'Cargo are transported at some stage of their journey along the world’s roads where we give...'},
        { image: pic4, title:"WareHousing", content: 'Package and store your things effectively and securely to make sure them in storage, have certif...'},
        { image: pic5, title:"Door to Door Delivery", content: 'Our expertise in transport management and planning allows us to design a solution. hand...'},
        { image: pic6, title:"Packaging & Storage", content: 'Package and store your things effectively and securely to make sure them in storage, We...'},
      ];
  return (
    <>
    <section className="row">
              {cardsData.map((card, index) => (
            
              <div key={index} className="col-md-4 mb-5">
                <div className="slider-item">
              <div className="card">
             <img src={card.image} className="card-img-top" alt="..."/>
             <div className="card-body">
              <h4 className="card-title">{card.title}</h4>
              <p className="card-text">{card.content}
               <a href="#" className='text-danger text-decoration-none'>Read More</a></p>
              
            </div>
          </div>
              </div>
              </div>
              
              ))}
               </section>



    </>
  )
}

export default Card