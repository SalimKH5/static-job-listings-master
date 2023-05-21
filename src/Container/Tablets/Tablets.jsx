import React from 'react'
import Require_filter from '../../Components/Require_filter'
import "./Tablets.css"
function Tablets({require,setRequire,setDisplay,allItem,setAllItem}) {

  const clear_table=()=>{
      setRequire([])
      setDisplay(false)
  }
  
  return (
    <div className="tablets-container">
        <div className="table-jobs">
        {
          require.map((re, index) => (
            <Require_filter setAllItem={setAllItem} key={index} text={re} require={require} setRequire={setRequire} setDisplay={setDisplay} allItem={allItem}/>
          ))
        }
        </div>
        <div className="clear-table">
            <button onClick={clear_table}>Clear</button>
        </div>
    </div>
  )
}

export default Tablets