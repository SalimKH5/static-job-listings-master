import React from 'react'
import "./Require_filter.css"
import Remove from "./icon-remove.svg"
import DataItem from "../data.json"
function Require_filter({text,setRequire,require,setDisplay,allItem,setAllItem}) {
    
  const modifiedObject = {
    items: DataItem.items.map((item) => {
      const { languages, tools, role, ...rest } = item;
      const new_field = [role,...languages, ...tools];
      return { ...rest, new_field };
    })
  };


    const remove_require=()=>{
      const re=require.filter((item) => item !== text)
      console.log(re)
      
      if(re.length>0){
        setDisplay(false)

        console.log(re)
        const filteredData = modifiedObject['items'].filter(item =>
          re.every(element => item.new_field.includes(element))
        );
          
        setAllItem(filteredData);
        
      }else{
        setDisplay(false)
      } 
      setRequire(re) 
    }
    

  return (
    <div className="Require_filter">
        <div className="Job_text">{text}</div>
        <div className="Job-drop" onClick={remove_require}>
            <img src={Remove} alt="" />
        </div>
    </div>
  )
}

export default Require_filter