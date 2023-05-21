import React from 'react'
import "./Require.css"
function Require({setRequire,require,text}) {

    const Click=()=>{
      if(!require.includes(text)){
        setRequire(require => [...require, text])
      }
    }

  return (
    <div className="requirement" onClick={Click} >
        {text}
    </div>
  )
}

export default Require