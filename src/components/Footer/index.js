

import FooterBottom from "../FooterBottom";
import FooterTop from "../FooterTop";
import "./index.css";

const Footer = () =>{

    return (<div className="footer-container">
        <FooterTop/>
        <hr className="hr-line-in-footer-section mobile-view-hr-line"/>
        <div className="footer-bottm-in-mobile-view">
            <FooterBottom/>
        </div>
    </div>)
}
export default Footer;