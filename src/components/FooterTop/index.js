

import "./index.css";

const FooterTop = () =>{

    return (
        <>
        <div className="fooetr-top-secton-component-container">
            <div>
                <h2 className="heding-text-in-footer-left">BE THE FIRST TO KNOW</h2>
                <p className="para-text-footer-top">Sign up forupdates from metta muse.</p>
                <input type="search" className="search-box-in-footer"/>
                <button type="button" className="buttn-subscribe">SUBSCRIBE</button>
            </div>
            <div>
                <h2 className="heding-text-in-footer-left">CONTACT US</h2>
                <p className="para-text-footer-top">+442211335360</p>
                <p className="para-text-footer-top">customercare@mettamuse.com</p>
                <h2 className="heding-text-in-footer-left">CURRENCY</h2>
                <div className="logo-usa-container">
                    <img src="https://img.freepik.com/premium-vector/usa-flag-vector-illustration_768467-119.jpg?w=1380" alt="usa" className="image-usa"/>
                    <p className="usd-text-in-footer-top">+ USD</p>
                </div>
                <p className="para-text-footer-top">Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
        </div>
        <div className="fooetr-top-secton-component-container-mobile">
            <div>
                <h2 className="heding-text-in-footer-left">BE THE FIRST TO KNOW</h2>
                <p className="para-text-footer-top">Loremipsum is simply dummy text of the printing and typesettingindustry.thi is simply dummy text.</p>
                <div>
                <input type="search" className="search-box-in-footer"/>
                <button type="button" className="buttn-subscribe mobile-view-buttn">SUBSCRIBE</button>
                </div>
                <hr className="hr-line-in-footer"/>
            </div>
            <div>
                <h2 className="heding-text-in-footer-left">CALL US</h2>
                <div className="mail-contact-details-container">
                    <p className="para-text-footer-top">+442211335360</p>
                    <p className="para-text-footer-top mobile-view-contact-details">+ customercare@mettamuse.com</p>
                </div>
                <hr className="hr-line-in-footer"/>
                <h2 className="heding-text-in-footer-left">CURRENCY</h2>
                <div className="logo-usa-container">
                    <img src="https://img.freepik.com/premium-vector/usa-flag-vector-illustration_768467-119.jpg?w=1380" alt="usa" className="image-usa"/>
                    <p className="usd-text-in-footer-top">+ USD</p>
                </div>
                <hr className="hr-line-in-footer"/>
                <select className="select-in-footer-mobile">
                    <option>metta muse</option>
                </select>
                <hr className="hr-line-in-footer"/>
                <select className="select-in-footer-mobile">
                    <option>QUICK LINKS</option>
                </select>
                <hr className="hr-line-in-footer"/>
                <select className="select-in-footer-mobile">
                    <option>FOLLOW US</option>
                </select>
                <hr className="hr-line-in-footer"/>
                <p className="para-text-footer-top mobile-view-contact-details">metta muse ACCEPTS</p>
                <div className="payment-card-container">
                    <img src="https://img.freepik.com/premium-vector/cup-coffee-line-icons-coffee-break-date-toning-beans-cocoa-cappuccino-cafe-concept-vector-line-icon-white-background_661108-8062.jpg?w=740" alt="paymentCard" className="image-payment-card"/>
                    <img src="https://img.freepik.com/premium-photo/mastercard-vector-banner-logo-illustration_895118-11386.jpg?w=740" alt="paymentCard" className="image-payment-card"/>
                    <img src="https://img.freepik.com/premium-photo/pay-speech-bubble-minimalist-abstract-design-with-white-cut-out-paper-blue-background-3d-render_444225-582.jpg?w=1380" alt="paymentCard" className="image-payment-card"/>
                    <img src="https://img.freepik.com/premium-photo/london-uk-april-apple-pay-online-payment-service-provider-company-logo-d-rendering_601748-59589.jpg?w=1060" alt="paymentCard" className="image-payment-card"/>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default FooterTop;