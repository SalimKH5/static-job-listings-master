import React, { useEffect, useState } from 'react'
import "./App.css"
import Job from "./Container/Job/Job"
import Tablets from './Container/Tablets/Tablets'
import DataItem from "./data.json"
function App() {


  const [require,setRequire]=useState([])
  const [display,setDisplay]=useState(false)
  
  const [jsonData, setJsonData] = useState(null);
  const modifiedObject = {
    items: DataItem.items.map((item) => {
      const { languages, tools, role, ...rest } = item;
      const new_field = [role,...languages, ...tools];
      return { ...rest, new_field };
    })
  };

  const [allItem,setAllItem]=useState(modifiedObject['items'])

  

  useEffect(()=>{

    if(require.length){
      setDisplay(true)

      const filteredData = modifiedObject['items'].filter(item =>
        require.every(element => item.new_field.includes(element))
      );
      
      setAllItem(filteredData);

    }
    if(require.length==0){
      setAllItem(modifiedObject['items'])
    }

  },[require])


 
  
  return (
    <div className="Static-container">
          
        <div className="header-container"></div>
        <div className="main-container">
                
                <div className="main-content">
                {display && <Tablets require={require} setRequire={setRequire} setDisplay={setDisplay} allItem={allItem} setAllItem={setAllItem}/>}
                {
                  allItem.map((item, index) => (
                    <Job  key={index} require={require} setRequire={setRequire} 
                    item={item}  /> 
                    )
                  )
                }
                </div>
        </div>
    </div>
  )
}

export default App