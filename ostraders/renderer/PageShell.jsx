import React from 'react'
import PropTypes from 'prop-types'
import './PageShell.css'
import { PageContextProvider } from './usePageContext'
import { childrenPropType } from './PropTypeValues'
import Navbar from '../components/Navbar';
import '../styles/styles.css'
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import Scroll from "../components/SmoothScroll";
import ScrollToTop from "../components/ScrollToTop";
import Inquiry from "../components/Inquiry";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import DetailModel from "../components/DetailModel";
import 'bootstrap/dist/css/bootstrap.min.css';

export { PageShell }

PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
}
function PageShell({ pageContext, children }) {

  
  const [modelOpen, setModelOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from('.company-item', {
      y: 50,
      duration: .5,
      opacity: 0,
      stagger: .3,
      scrollTrigger: {
        trigger: ".sister-companies",
        start: "top 80%",
        end: "bottom bottom",
        scroller: ".smoothContainer",
      }
    })



    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill(); // Kill all ScrollTriggers
      });
    };
  })

  const [product2Id, setproduct2Id] = useState(1);
  const [category, setCategory] = useState(null);

  const [modelState, setModelState] = useState(false);
  const [startVideo, setStartVideo] = useState(true);


  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
      <Navbar />
        <Scroll />
        <ScrollToTop />
        <DetailModel id={product2Id} category={category} open={modelState} close={setModelState} />
        <Inquiry open={modelOpen} setOpen={setModelOpen} />
        <div className={`smoothContainer`}>
        {children}
        <div className="parallax" style={{ backgroundImage:"url('../images/hybridBG.jpg')", marginTop: "80px" }}>
            <div className="container d-flex justify-content-center align-items-center flex-column" style={{ zIndex: "2", position: "relative" }}>
              <span>Buy Now</span>
              <h2>Interested in Buying?</h2>
              <p className='mt-0'>Don't hesitate and send us a message.</p>
              <div className="mt-3 d-flex justify-content-center align-items-center flex-wrap">
                <a href="" className='button me-3 transform mb-2'><i className="fa-brands fa-whatsapp me-1"></i> WhatsApp</a>
                <button onClick={() => setModelOpen(!modelOpen)} className='button btn1 transform  mb-2'>Inquiry Now <i className=' fa-solid fa-arrow-right-long ms-1' style={{ transform: "rotate(-45deg)" }}></i></button>
              </div>
            </div>
          </div>

          <div className="container-fluid padd-x ">
            <div style={{ margin: "40px 0px 10px 0" }} className="heading container-fluid d-flex justify-content-center align-items-center flex-column">
              <span className='span'>Companies</span>
              <h2>Sister <span>Companies</span></h2>
            </div>
            <div className="companies sister-companies">
              <div className="company-item">
                <h5>Skyline SPRL</h5>
                <div className="d-flex align-items-start">
                  <i className="fa-solid fa-location-dot mt-2"></i>
                  <p>Bujumbura- Burundi Rue de la Ruzizi No 1</p>
                </div>
                <div className="d-flex align-items-center">
                  <i className=" fa-solid fa-phone"></i>
                  <a href="tel:/+257-76515000">+257 - 765 150 00</a>
                </div>
              </div>
              <div className="company-item">
                <h5>Gora Trading</h5>
                <div className="d-flex align-items-start">
                  <i className="fa-solid fa-location-dot mt-2"></i>
                  <p>Kigali -Rwanda Gasabo, Kimironko</p>
                </div>
                <div className="d-flex align-items-center">
                  <i className=" fa-solid fa-phone"></i>
                  <a href="tel:/+250-794095622">+250 - 794 095 622</a>
                  <a href="https://www.instagram.com/gora_trading_ltd/" className="icon"><i className=" fa-brands fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </PageContextProvider>
    </React.StrictMode>
  )
}
