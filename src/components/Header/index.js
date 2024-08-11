
import { MdOutlineFilterTiltShift } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { TbShoppingBagMinus } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";
import "./index.css";

const Header = () =>{

    return (
        <>
        <div className="header-main-container">
            <MdOutlineFilterTiltShift size={30} color="#000000"/>
            <h1 className="logo-heding-text">LOGO</h1>
            <div className="nav-link-container">
                <CiSearch size={30} color="#000000"/>
                <FcLike size={30} color="#000000"/>
                <TbShoppingBagMinus size={30} color="#000000"/>
                <select className="language-seclect">
                    <option>ENG</option>
                    <option>తెలుగు</option>
                    <option>हिन्दी</option>
                </select>
            </div>
        </div>
        <div className="header-main-container-mobile">
            <div className="menu-container">
                <IoMdMenu size={30} color="#000000"/>
                <MdOutlineFilterTiltShift size={30} color="#000000"/>
            </div>
            
            <h1 className="logo-heding-text">LOGO</h1>
            <div className="nav-link-container">
                <CiSearch size={30} color="#000000"/>
                <FcLike size={30} color="#000000"/>
                <TbShoppingBagMinus size={30} color="#000000"/>
                
            </div>
        </div>
        </>
    )
}
export default Header;