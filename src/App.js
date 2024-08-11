
import { useState } from "react";
import {Switch,Route} from "react-router-dom";
import Home from "./components/Home"
import FilterContext from "./context/FilterContext"
import './App.css';

const App = () => {
  const[totalProducts,setTotalItems] = useState(0);
  const[isFlterClicked, setIsFilter] = useState(false);

  const settingTotalProducts = (data) =>{
    setTotalItems(data)
  }

  const setIsFilterClicked = () =>{
    setIsFilter(prevVlaue => !prevVlaue)
  }
  return (
    <FilterContext.Provider value={{totalProducts,isFlterClicked,setIsFilterClicked,settingTotalProducts}}>
    <Switch>
        <Route exact path="/" component={Home}/>
    </Switch>
    </FilterContext.Provider>
  );
}

export default App;
