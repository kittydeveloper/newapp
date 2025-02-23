import React, { useState } from 'react'
import './Home.css'
import doctor from '../../../src/assets/doctor1.jpg';
import image1 from '../../../src/assets/hospital.jpg';
import image2 from '../../../src/assets/hospital2.jpg';
import image3 from '../../../src/assets/hospital3.jpg';
import image4 from '../../../src/assets/hospital4.jpg';
import Footer from '../Footer/Footer';
import image8 from '../../../src/assets/SURG.jpg';
import { Outlet, Link } from "react-router-dom";

import { TfiAlignJustify } from "react-icons/tfi";
function Home() {

  const [open, setOpen] = useState(false)
  const handleclick = () => {
    setOpen(!open)
  }
  return (
    <>
    <div className='main_content'>

      <nav className='navbar  fixed-top' >
        <div className="navbar-left">


          <img src={doctor} className="img_data" width="100%" height="100%" />


        </div>

        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              {/* <a href="/#section1">Products</a> */}
              {/* <a href="/#section1">Products</a> */}
              <Link to="/home">Products</Link>
            </li>
            <li>
              {/* <a href="/#section2">About Us</a> */}
              <Link to="/about">Products</Link>

            </li>
            
            <li className='ajay'>
              {/* <a href="/#section3">Contact</a> */}
              <Link to="/about">Contact</Link>
              <div className='navz_data'>

              <ul style={{listStyleType:"none"}}>
            <li>range1</li>
            <li>rangef ggyhkj</li>
            <li>range3</li>
            <li>range3</li> 
            <li>range3</li>
            </ul>
            </div>
            </li>
            <li>
              {/* <a href="/about">service</a> */}
              <Link to="/about">service</Link>
            </li>
            <li>
              {/* <a href="/contact">Appointment</a> */}
              <Link to="/about">Appointment</Link>
            </li>
          </ul>
        </div>

        <div className='align_click' onClick={handleclick}>
          <TfiAlignJustify />
        </div>





      </nav>
      <div className={open ? "navbar-center1" : "navbar-center2 fixed-top"}>
        <ul className="nav-links1">
          <li>
            <a  href="/#section1">Products </a>
          </li>
          <li>
            <a  href="/#section2">About Us </a>
          </li>
          <div>
          <li>
            <a  href="/#section3">Contact </a>
            <div >
            <ul>
            <li>range1</li>
            <li>range2</li>
            <li>range3</li>
            </ul>
            </div>
            
            
          </li>
          </div>
          <li>
            <a href="/about">service</a>
          </li>
          <li>
            <a href="/contact">Appointment</a>
          </li>
        </ul>



      </div>


      <div className='carsol_data' id="section1">

        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          {/* Slideshow */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row color_data">
                <div className="col-12 col-sm-6 ">
                  <div className="row w-100 image-height1 ">
                    <div className="col bor_der">
                      <div >
                        <h1 className='text-center'>Hello Doctor</h1>
                        <h2 className='text-center'> Breast biopsy. · Carotid endarterectomy. · Cataract surgery. </h2>
                        <button type="button" class="btn btn-primary">Basic</button>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <img
                    src={image1}
                    //  class="img-thumbnail"
                    className="d-block w-100 image-height1 img-thumbnail"
                    alt="Los Angeles"
                  />
                </div>
              </div>
              {/* <img
            src={image1}
            className="d-block w-100 image-height"
            alt="Los Angeles"
          /> */}
            </div>
            <div className="carousel-item">
              <img
                src={image2}
                className="d-block w-100 image-height1 img-thumbnail"
                alt="Chicago"
              />
            </div>
            <div className="carousel-item">
              <img
                src={image3}
                className="d-block w-100 image-height1 img-thumbnail"
                alt="New York"
              />
            </div>
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


      </div>

    </div>

    <section id="section2">
     <div className="container colo_bh">
     
      
     <div className="row p-5 zdata">
      <div className="col-12 col-lg-6 ali_imh">
        <div>
        <img
                src={image8}
                className="img-thumbnail"
                width={"100%"}
                height={"100%"}
                alt="New York"
              /></div>
              </div>
      <div className="col-12 col-lg-6 p-3">
        <div className="col ">
        <h1>
         <strong> Dr.Kitty Doctor ph.d </strong>
        </h1>
        </div>
        <div className="col">
        <p className='high_pp'>
         <strong>senior consultant geriatrician with over three decades of experience. in Chennai</strong>
        </p>
        </div>
        <div className="col">
        <p className='high_pp1'>
        A "senior consultant doctor" is a highly experienced physician who has completed specialized training in their medical field, holding a leadership position within a hospital or clinic, responsible for diagnosing complex cases, managing patient care, supervising junior doctors, and often participating in research and teaching activities; 
        </p>
        </div>
        <div className="col">
          <div className='chnage_ff'>
       <p> <strong>phone :</strong>6988756544</p>
       <p> <strong>Email : </strong>kiitydoctor@gmail.com</p>
       <div className='button_ch'>
       <button type="button " class="btn btn-danger"> Read More</button>
       </div>
        </div>
        </div>
      </div>
      
     </div>
     </div>
       
   
    </section>
    <section id="section3">
    <Footer />
    </section>
    </>
  )
}

export default Home