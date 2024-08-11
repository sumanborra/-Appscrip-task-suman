import React from 'react'

const FilterContext = React.createContext({
  totalProducts:0,
  isFlterClicked:false,
  settingTotalProducts: () => {},
  setIsFilterClicked: () => {},
  
})

export default FilterContext
