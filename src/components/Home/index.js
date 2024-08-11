
import AllProducts from "../AllProducts";
import Description from "../Description";
import FilterFeatures from "../FilterFeatures";
import Footer from "../Footer";
import Header from "../Header";
import TabsSection from "../TabsSection";
import "./index.css"
const Home = () =>{

    return (
        <div className="home-main-container">
            <Header/>
            <TabsSection/>
            <Description/>
            <FilterFeatures/>
            <AllProducts/>
            <Footer/>
        </div>
    )
}
export default Home;