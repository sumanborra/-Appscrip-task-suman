

import "./index.css";

const FilterOptionsSection = () =>{

    return (
        <div className="filter-options-section-container">
            <div className="customize-select-container">
                <input type="checkbox" className="input-in-filter-options" id="customizable"/>
                <label className="customizable-text" htmlFor="customizable">CUSTOMIZBLE</label>
            </div>
            <hr className="hr-line-in-filter-option"/>
            <div>
                <select className="select-in-option-filter-section">
                    <option>IDEAL FOR</option>
                </select>
                <p className="all-text-in-filter-option-section">All</p>
                <p className="all-text-in-filter-option-section un-select">Unselect all</p>
                <div className="customize-select-container">
                <input type="checkbox" className="input-in-filter-options" id="men"/>
                <label className="customizable-text select-men-box" htmlFor="men">Men</label>
            </div>
            <div className="customize-select-container">
                <input type="checkbox" className="input-in-filter-options" id="women"/>
                <label className="customizable-text select-men-box" htmlFor="women">Women</label>
            </div>
            <div className="customize-select-container">
                <input type="checkbox" className="input-in-filter-options" id="kids"/>
                <label className="customizable-text select-men-box" htmlFor="kids">Baby & Kids</label>
            </div>
            </div>
            <hr className="hr-line-in-filter-option"/>
            <div>
                <select className="select-in-option-filter-section">
                    <option>OCCASION</option>
                </select>
                <p className="all-text-in-filter-option-section">All</p>
                </div>
                <hr className="hr-line-in-filter-option"/>
            <div>
                <select className="select-in-option-filter-section">
                    <option>WORK</option>
                </select>
                <p className="all-text-in-filter-option-section">All</p>
                </div>
                <hr className="hr-line-in-filter-option"/>
            <div>
                <select className="select-in-option-filter-section">
                    <option>FABRIC</option>
                </select>
                <p className="all-text-in-filter-option-section">All</p>
                </div>
                <hr className="hr-line-in-filter-option"/>
            <div>
                <select className="select-in-option-filter-section">
                    <option>SEGMENT</option>
                </select>
                <p className="all-text-in-filter-option-section">All</p>
                </div>
                <hr className="hr-line-in-filter-option"/>
            <div>
                <select className="select-in-option-filter-section">
                    <option>SUITABLE FOR</option>
                </select>
                <p className="all-text-in-filter-option-section">All</p>
                </div>
                <hr className="hr-line-in-filter-option"/>
            <div>
                <select className="select-in-option-filter-section">
                    <option>RAW MATERIALS</option>
                </select>
                <p className="all-text-in-filter-option-section">All</p>
                </div>
                <hr className="hr-line-in-filter-option"/>
            <div>
                <select className="select-in-option-filter-section">
                    <option>PATTERN</option>
                </select>
                <p className="all-text-in-filter-option-section">All</p>
                </div>

        </div>
    )

}
export default FilterOptionsSection;