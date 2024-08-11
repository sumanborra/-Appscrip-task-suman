
import "./index.css";

const TabsSection = () =>{

    return (
        <>
            
            <div className="tabs-section-container">
                    <h2 className="heading-tabs-text">SHOP</h2>
                    <h2 className="heading-tabs-text">SKILLS</h2>
                    <h2 className="heading-tabs-text">STORIES</h2>
                    <h2 className="heading-tabs-text">ABOUT</h2>
                    <h2 className="heading-tabs-text">CONTACT US</h2>
            </div>
            <hr className="horizontal-line"/>
            
            <div className="tabs-section-container-mobile">
                    <h2 className="heading-tabs-text mobile-view-home-text">HOME |</h2>
                    <h2 className="heading-tabs-text">SHOP</h2>
            </div>
        </>
    )
}
export default TabsSection;