import React from 'react'

function Home() {
  return (
    <>
 <div className="all-background  d-flex flex-column justify-content-center align-items-center">
  <div className="py-5 ">
    <div className="img-home w-75 mx-auto py-4">
    <img src="src/assets/avataaars.svg" className="card-img-home w-100" alt="" />
    </div>
    <div className="card-body mx-auto text-center text-white">
      <h1 className="card-title fw-bold">START FRAMEWORK</h1>
      <div className="HRline d-flex justify-content-center my-2 ">
        <div className="line me-4 rounded-pill"></div>
        <i class="fa-solid fa-star"></i>
        <div className="line ms-4 rounded-pill"></div>
      </div>
      <p className="card-text"><small className="text-white">Graphic Artist - Web Designer - Illustrator</small></p>
    </div>
  </div>
 
 </div>



    
    </>
  )
}

export default Home
