import React from 'react'

function Form() {
  return (
    <>
    
    <form action="">
                <div className="d-flex mt-3">
                  <div className="flex-grow-1 me-2">
                    <input type="text" className='form-control' placeholder='Name'/>
                  </div>
                  <div className="flex-grow-1 ms-2">
                     <input type="email" className='form-control' placeholder='Email'/>
                  </div>

                </div>

                <div className="d-flex mt-3">
                  <div className="flex-grow-1 me-2">
                    <input type="number" className='form-control' placeholder='Phone(Optional)'/>
                  </div>
                  <div className="flex-grow-1 ms-2">
                     <input type="text" className='form-control' placeholder='Subject'/>
                  </div>

                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder='Enter your message Here' className='form-control mt-3'></textarea>

                <a href="" className="btn btn-danger mt-3">Submit</a>
              </form>
    
    
    
    
    </>
  )
}

export default Form