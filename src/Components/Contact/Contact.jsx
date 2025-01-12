import React from 'react'

function Contact() {
  return (
    <>
     <div className="all-background py-5 bg-body">
      <div className="contact-header pb-4 d-flex flex-column  align-items-center">
      <h1 className="fw-bold">CONTACT SECTION</h1>
      <div className="HRline d-flex justify-content-center ">
          <div className="line me-4 rounded-pill bg-black"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-4 rounded-pill bg-black "></div>
        </div>
    
      </div>
    
        <div className="d-flex flex-column align-items-center py-5 ">
          <div className="mb-3 w-50 ">
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="UserName"  />
          </div>
          <div className="mb-3 w-50">
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="UserAge" />
          </div>
          <div className="mb-3 w-50">
            <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="UserPassword" />
          </div>
          <div className="mb-3 w-50">
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="UserEmail" />
          </div>
          <button type="button" class="btn btn-success">Send Message</button>


      </div>
    </div>

    </>
  )
}

export default Contact
