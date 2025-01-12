import React from 'react'

function Portfolio() {
  return (
    <>
  <div className="py-5 bg-body">
    <div className="portfolio-header d-flex flex-column  align-items-center">
    <h1 className="fw-bold">PORTOFOLIO COMPONENT</h1>
    <div className="HRline d-flex justify-content-center ">
        <div className="line me-4 rounded-pill bg-black"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line ms-4 rounded-pill bg-black "></div>
      </div>
   
    </div>
    <div className="container">
      <div className="row g-5 ">
            <div className="col-md-4 rounded-3 image-wrapper " >
              <img src="src/assets/poert1.png" className="w-100 rounded-3" alt="..." />
          
            </div>

            <div className="col-md-4 rounded-3 " >
              <img src="src/assets/port2.png" className="w-100 rounded-3" alt="..." />
          
            </div>

            <div className="col-md-4 rounded-3 " >
              <img src="src/assets/port3.png" className="w-100 rounded-3" alt="..." />
          
            </div>

            <div className="col-md-4 rounded-3 " >
              <img src="src/assets/poert1.png" className="w-100 rounded-3" alt="..." />
          
            </div>

            <div className="col-md-4 rounded-3 " >
              <img src="src/assets/port2.png" className="w-100 rounded-3" alt="..." />
          
            </div>

            <div className="col-md-4 rounded-3 " >
              <img src="src/assets/port3.png" className="w-100 rounded-3" alt="..." />
          
            </div>

      </div>  
    </div>
    
  </div>
    </>
  )
}

export default Portfolio
