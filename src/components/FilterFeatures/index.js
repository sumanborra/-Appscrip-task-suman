

import FilterContext from "../../context/FilterContext";
import "./index.css";

const FilterFeatures = () =>{

        

        return (
            <FilterContext.Consumer>
                { value =>{ 
                    const{totalProducts,isFlterClicked,setIsFilterClicked} = value
                    const displayTextOnButton = isFlterClicked=== true?">  HIDE FILTERS": ">  SHOW FILTERS";
                    const filterButtonClicked = () =>{
                        setIsFilterClicked();
                    }

           return(
            <> <hr className="filter-section-hr-line"/>
            <div className="filter-section-container">
                <div className="Items-show-container">
                    <p className="total-items-show-text">{totalProducts} ITEMS</p>
                    <button type="button" className="show-filter-text buttn-show-filter" onClick={filterButtonClicked}>{displayTextOnButton}</button>
                </div>
                <select className="select-filters-sort">
                    <option className="options-text">RECOMMENDED</option>
                    <option className="options-text">NEWEST FIRST</option>
                    <option className="options-text">POPULAR</option>
                    <option className="options-text">PRICE: HIGH-LOW</option>
                    <option className="options-text">PRICE: LOW-HIGH</option>
                </select>
                
            </div>
            <div className="filter-section-container-mobile">
                
                    <p className="total-items-show-text">FILTER</p>
                    
                    <p className="show-filter-text">|</p>
                <select className="select-filters-sort-mobile">
                    <option className="options-text">RECOMMENDED</option>
                    <option className="options-text">NEWEST FIRST</option>
                    <option className="options-text">POPULAR</option>
                    <option className="options-text">PRICE: HIGH-LOW</option>
                    <option className="options-text">PRICE: LOW-HIGH</option>
                </select>
                
            </div>
            <hr className="filter-section-hr-line"/>
            </>
                )
        }}
            </FilterContext.Consumer>
        )
}
export default FilterFeatures;