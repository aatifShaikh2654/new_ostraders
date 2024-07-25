import React from 'react'
import styles from '../styles/footer.module.css'
import { useState } from 'react'

const Footer = () => {

    const [formData, setformData] = useState({email:""})
    const handleChange = (e) => {
        setformData({...formData, [e.target.name]: e.target.value})
    }
    const [response, setResponse] = useState('');
    const handleSubmit  = async (e) => {
        e.preventDefault();
        try {

      
            let result = await fetch("https://ostraders.net:5001/api/subscribe", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email: formData.email})
            })
            let response = await result.json();
            if (response.success) {
                setResponse("Email Sent Successfully")
            } else {
              console.log("Error occured");
            }
          }
          catch (error) {
            console.log(error);
          }
    }
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.contacts}>
                    <div className={styles.contact_item}>
                        <i className="fa-solid fa-phone"></i>
                        <div className="d-flex justify-content-start align-items-start flex-column">
                            <span>Call us</span>
                            <a className='m-0' href='tel:/+971553914183'>+971 55 391 4183</a>
                        </div>
                    </div>
                    <div className={styles.border}></div>
                    <div className={styles.contact_item}>
                        <i className="fa-solid fa-envelope"></i>
                        <div className="d-flex justify-content-start align-items-start flex-column">
                            <span>Mail us</span>
                            <a className='m-0' href="mailto:/info@ostraders.net">info@ostraders.net</a>
                        </div>
                    </div>
                    <div className={styles.border}></div>
                    <div className={styles.contact_item}>
                        <i className="fa-solid fa-location-dot"></i>
                        <div className="d-flex justify-content-start align-items-start flex-column">
                            <span>Address</span>
                            <a className='m-0'>IFZA, Dubai Silicon Oasis Dubai Digital <br />Park A2 123600, Dubai, UAE</a>
                        </div>
                    </div>
                </div>

                <div className={`row ${styles.footer_section}`}>
                    <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <h3>OS Traders</h3>
                        <p>Your Auto Care Expert</p>
                        <div className="d-flex align-items-center justify-content-start">
                            <a href="https://vt.tiktok.com/ZSF3jKFeH/" target='_blank'><i className={`fa-brands fa-tiktok ${styles.icon}`}></i></a>
                            <a href="https://www.facebook.com/ostradersofficial" target='_blank'><i className={`fa-brands fa-facebook-f ${styles.icon}`}></i></a>
                            <a target='_blank' href="https://www.instagram.com/ostradersofficial?igsh=c3JjNWxocmgzNGQ4"><i className={`fa-brands fa-instagram ${styles.icon}`}></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-md-center align-items-md-center flex-column">
                        <div className=''>
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="/about">About</a></li>
                                <li><a href="/collections/cars">Cars</a></li>
                                <li><a href="/lubricants">Lubricants</a></li>
                                <li><a href="/accessories">Accessories</a></li>
                                <li><a href="/tires-batteries">Tires and Batteries</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <h4>Subscribe</h4>
                        <p>Subscribe for email updates and stay informed with the latest notifications!</p>
                        <form onSubmit={handleSubmit} className={styles.newsLetter}>
                            <input type="email" placeholder='Email Address' name='email' onInput={formData.emaili} value={formData.email} onChange={handleChange}/>
                            <button type='submit'><i className={`fa-solid fa-arrow-up-long ${styles.icon}`}></i></button>
                        </form>
                        <p style={{ color: "green" }}>{response}</p>
                    </div>
                </div>
                <div className={styles.foot}>
                    <p>©2024 <a href="https://www.webify.ai/">webify.ai</a> All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
