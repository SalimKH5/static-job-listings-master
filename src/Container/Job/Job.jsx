import React from 'react'
import "./Job.css"
import Require from '../../Components/Require'
function Job({require,setRequire,item}) {

   
  return (
    <div className="Job-container">
            <div className="job-detail">
                <div className="Job-image">
                    <img src={item.logo} alt="" />
                </div>
                <div className="Details">
                    <div className="first-detail">
                        <h3>{item.company}</h3>
                    </div>
                    <div className="second-detail">
                        <h3>{item.position}</h3>
                    </div>
                    <div className="third-detail">
                        <p>{item.postedAt}</p>
                        <p>.</p>
                        <p>{item.contract}</p>
                        <p>.</p>
                        <p>{item.location}</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="job-requirements">
                    
                {   item.new_field.map((re, index) => (
                    <Require  key={index} require={require} setRequire={setRequire} text={re} />
                    ))
                }
                
            </div> 
    </div>
  )
}

export default Job