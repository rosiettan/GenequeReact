import React from 'react';
import './footer.css'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <img src="geneque.png" alt="Geneque"
                    style={{ maxWidth: '50px', marginBottom: '10px' }} />
                <img src="logo.png" alt="logo"
                    style={{ maxWidth: '200px', marginBottom: '10px', marginLeft: '-10px' }} />
                <div className="social">
                    <a href="your-facebook-url"><img src="Facebook.png" alt="Facebook"
                        style={{ width: '14px', height: '20px' }} /></a>
                    <a href="your-twitter-url"><img src="Twitter.png" alt="Twitter"
                        style={{ width: '20px', height: '15px' }} /></a>
                    <a href="https://www.instagram.com/rosiettan"><img src="Instagram.png" alt="Instagram"
                        style={{ width: '20px', height: '19px' }} /></a>
                    <a href="your-linkedin-url"><img src="LinkedIn.png" alt="LinkedIn"
                        style={{ width: '20px', height: '20px' }} /></a>
                    <a href="#"><img src="YouTube.png" alt="YouTube"
                        style={{ width: '25px', height: '18px' }} /></a>
                </div>
            </div>
            <div className="footer-column">
                <h4>Product</h4>
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Case studies</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Updates</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Company</h4>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Culture</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Support</h4>
                <ul>
                    <li><a href="#">Getting started</a></li>
                    <li><a href="#">Help center</a></li>
                    <li><a href="#">Server status</a></li>
                    <li><a href="#">Report a bug</a></li>
                    <li><a href="#">Chat support</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Contact us</h4>
                <ul>
                    <li><a href="mailto:211501@astanait.edu.kz">211501@astanait.edu.kz</a></li>
                    <li><a href="tel:7-708-823-67-97">+7 (708) 823 67 97</a></li>
                    <li><a href="#">Kazakhstan, Astana, 010000</a></li>
                </ul>
            </div>
            <div className="footer-bottom-container">
                <div className="footer-bottom">
                    Copyright © 2023
                    <a href="#"> Terms and Conditions</a> |
                    <a href="#"> Privacy Policy</a>
                </div>
            </div>
        </footer>

    );
};

export default Footer;