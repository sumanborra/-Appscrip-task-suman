import { useState, useEffect } from "react";

import "./index.css";
import FilterContext from "../../context/FilterContext";
import FilterOptionsSection from "../FilterOptionsSection";

const AllProducts = () =>{

    const[products, setProducts] = useState([]);

    useEffect(() =>{
        const getProductsData = async () =>{
            try{
            const responseFromApi = await fetch("https://fakestoreapi.com/products");
            const allProductsData = await responseFromApi.json();   
            if(responseFromApi.status === 200){
                setProducts(allProductsData);
            }
        }
        catch(err){
            setProducts(err)
        }
        }
        getProductsData();
    },[])

    return (
        <FilterContext.Consumer>
            { value => { 

                const{settingTotalProducts,isFlterClicked} = value;
                settingTotalProducts(products.length)
        return (<div className="all-products-container">
            {isFlterClicked === true && <div className="filter-option-component"><FilterOptionsSection/></div>}
           <ul className="card-container">
                {
                    products.map((eachProduct) => (
                        <li className="list-item-container" key={eachProduct.id}>
                            <img src={eachProduct.image} alt="product" className="image-style"/>
                            <p className="product-title-text">{eachProduct.title}</p>
                            <p className="product-title-text"><span className="span-text">category:</span> {eachProduct.category}</p>
                            <p className="product-title-text"><span className="span-text">Rs:</span> {eachProduct.price}/-</p>
                            <p className="product-title-text"><span className="span-text">Rating:</span> {eachProduct.rating.rate}</p>
                        </li>
                    ))
                }
            </ul>
            
        </div>)
        }}
        </FilterContext.Consumer>
    )
}
export default AllProducts;