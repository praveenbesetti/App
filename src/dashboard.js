import React from 'react';
import './Dashboard.css';
import {Link} from 'react-router-dom';
const DashBoard=()=>
{
    const data=[
        { day:"Monday", productvity:"4"},
        { day:"Tuesday", productvity:"92"},
        { day:" Wednesday", productvity:"122"},
        { day:" Thursday", productvity:"93"},
        { day:"Friday", productvity:"89"},
        { day:"Saturday", productvity:"98"},
       

    ]
    return (
        <div>
            <img src="imgs\Group 46.png" id="logo"/>
            <img src="imgs\moptro logo.png" id="pogo"/>
            <div id="text"><h3>Employee Productivity DashBoard</h3></div>
            <div id="hold">
            {data.map((item)=>
            {
                const {day ,productvity}=item;
                return(
                    <div >
                        
                        <h5>Productivity on {day} </h5> <span >{productvity}%</span>
                    <input id="ragne1"
                    type="range"
                    min="0"
                    max="150"
                    value={productvity}
                    /><br/>
                   
                    </div>
                )
            })}
          </div>
                <div id="dot">
                    <Link to="/dashboard"> <button className="link">Home</button></Link> 
                    <Link to="/users"> <button className="link">users</button></Link>
                    </div>
        </div>
    )
}
export default DashBoard;