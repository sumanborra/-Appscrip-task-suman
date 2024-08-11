
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import "./index.css";

const FooterBottom = () =>{

    return (
        <div className="footer-bottm-section">
            <div>
                <h2 className="footer-bottom-heading">metta muse</h2>
                <ul className="list-container-footer-bottom">
                    <li className="list-items-in-footer-bottom">About Us</li>
                    <li className="list-items-in-footer-bottom">Stories</li>
                    <li className="list-items-in-footer-bottom">Artisans</li>
                    <li className="list-items-in-footer-bottom">Boutiques</li>
                    <li className="list-items-in-footer-bottom">Contact Us</li>
                    <li className="list-items-in-footer-bottom">EU Compliance Docs</li>
                </ul>
            </div>
            <div>
                <h2 className="footer-bottom-heading">QUICK LINKS</h2>
                <ul className="list-container-footer-bottom">
                    <li className="list-items-in-footer-bottom">Orders & Shipping</li>
                    <li className="list-items-in-footer-bottom">Join/Login as a Seller</li>
                    <li className="list-items-in-footer-bottom">Payment & Pricing</li>
                    <li className="list-items-in-footer-bottom">Return & Refunds</li>
                    <li className="list-items-in-footer-bottom">FAQs</li>
                    <li className="list-items-in-footer-bottom">Privacy policy</li>
                    <li className="list-items-in-footer-bottom">Terms & Conditions</li>
                </ul>
            </div>
            <div>
                <h2 className="footer-bottom-heading">FOLLOW US</h2>
                <div className="footer-bottom-social-icons">
                    <div className="icon-background-container-footer-bottom">
                        <AiFillInstagram size={36} color="#ffffff"/>
                    </div>
                    <div className="icon-background-container-footer-bottom">
                        <FaLinkedin size={30} color="#ffffff"/>
                    </div>

                </div>
                <p className="para-text-footer-top mobile-view-contact-details bottom-footer-para-text">metta muse ACCEPTS</p>
                <div className="payment-card-container">
                    <img src="https://img.freepik.com/premium-vector/cup-coffee-line-icons-coffee-break-date-toning-beans-cocoa-cappuccino-cafe-concept-vector-line-icon-white-background_661108-8062.jpg?w=740" alt="paymentCard" className="image-payment-card footer-bottom"/>
                    <img src="https://img.freepik.com/premium-photo/mastercard-vector-banner-logo-illustration_895118-11386.jpg?w=740" alt="paymentCard" className="image-payment-card footer-bottom"/>
                    <img src="https://img.freepik.com/premium-photo/pay-speech-bubble-minimalist-abstract-design-with-white-cut-out-paper-blue-background-3d-render_444225-582.jpg?w=1380" alt="paymentCard" className="image-payment-card footer-bottom"/>
                    <img src="https://img.freepik.com/premium-photo/london-uk-april-apple-pay-online-payment-service-provider-company-logo-d-rendering_601748-59589.jpg?w=1060" alt="paymentCard" className="image-payment-card footer-bottom"/>
                    
                </div>
                
            </div>
            
        </div>
    )
}
export default FooterBottom;