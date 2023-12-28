import "./Footer.scss";
 import React from "react";
 import "./Footer.scss";
 import {FaLocationArrow , FaMobileAlt,FaEnvelope} from "react-icons/fa";
 import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className ="footer">
        <div className="footer-content">
            <div className="col"> 
            <div className="title">About</div>
              <div className="text">
              Swipe, select & shop! It’s a fashion store on the go with the Myntra Mobile App. Shop for clothing, footwear, accessories and home furnishing for men, women and kids. Get all your favourite fashion brands and collections at the click of a button.

              </div>

            
            </div>
            <div className="col">
                <div className="title">Contact</div>
                 <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                    Buildings Alyssa,
                    Begonia and Clover situated in Embassy Tech Village,
                   Outer Ring Road,
                   Devarabeesanahalli Village,
                 Varthur Hobli,
                   Bengaluru – 560103, India
                    </div>


                 </div>
                 <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">
                    phone: +91-9630040614
                    </div>


                 </div>
                 <div className="c-item">
                    <FaEnvelope />
                    <div className="text">
                    Email: arpitgupta1918486@gmail.com
                    </div>


                 </div>
                
                </div>
            <div className="col">
                <div className="title">Categories</div>
                 <span className="text"> HeadPhones</span>
                 <span className="text">Smart Watches</span>

                 <span className="text">Bluetooth Speaker</span>

                 <span className="text">Wireless EarBuds</span>

                 <span className="text">Home Theatre</span>

                 <span className="text"> Projectors</span>

                    </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>

                </div>


        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                Ship with ❤ from India, All Rights Reserved
                </div>
                <img src={Payment} />
            </div>
        </div>
        
        </footer>;
};

export default Footer;
