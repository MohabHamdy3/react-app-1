import React from 'react'

function Footer() {
  return (
    <>
  <div className="card text-center border-0 ">

  <div className="card-body CB-footer py-4">
  <div class="row container mx-auto">
  <div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card border-0">
      <div class="card-body CB-footer">
        <h3>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
    </div>
  </div>

  <div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card border-0">
      <div class="card-body CB-footer">
        <h3>AROUND THE WEB</h3>
        <div className="icons "> 
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>            
        </div>
   
      </div>
    </div>
  </div>


  <div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card border-0">
      <div class="card-body CB-footer">
    <h3>ABOUT FREELANCER</h3>
    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
    </div>
  </div>


  

</div>
  </div>
  <div className="card-footer CF py-3 ">
  Copyright © Your Website 2021
  </div>
</div>

    </>
  )
}

export default Footer
