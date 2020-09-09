import React from 'react'
import './Siteinfo.css'
import Logo2 from '../../photos/Logo2.png'
function Siteinfo() {
    function handleclick(){
        document.getElementById("submit1").addEventListener("click",event=>{event.preventDefault()});
    }
    return(
        
        <div className="siteinfo-wrapper">
            <div className="siteinfo-content">
                <div className="col1">
                    <div>
                        <img src={Logo2} alt="logo2" style={{width:"200px"}} />
                    </div>
                    <p style={{fontSize:"15px", color:"gray"}}><br/>Edumodo focuses on creating magnificent<br/>
                    education websites with ease. Take the lead<br/> 
                    in the age with Learned</p>
                    <hr style={{color:"lightgray"}}/>
                </div>
                <div className="col2">
                    <h5 style={{fontWeight:"700"}}> FEATURED PROGRAMS</h5>
                    <div className="info">
                    <p>Fixed responsive issue - Just Now</p>
                    <p>New portfolio grid layout - Today</p>
                    <p>Tested & approved WP 3.6 - 5 hours ago</p>
                    <p>Fixed google map issue - Yesterday</p>
                    </div>
                </div>
                <div className="col3">
                    <h5 style={{fontWeight:"700"}}>LEARNING</h5>
                    <div className="info">
                    <p><a href="#">Our Plans</a></p>
                    <p><a href="#">Free Trial</a></p>
                    <p><a href="#">Academic <br/>Solutions</a></p>
                    <p><a href="#">Business <br/>Solutions</a></p>
                    </div>
                </div>
                <div className="col4">
                <h5 style={{fontWeight:"700"}}>SUPPORT FORUM</h5>
                    <div className="info">
                        <p>Write your email into below field and join our
                        quick support<br/> forum.</p>
                    </div>
                    <form>
                    <div className="email">
                        <div>
                            <input type="email" id="mail" placeholder="EMAIL ADDRESS"/>
                        </div>
                        <div>
                            <input type="submit" id="submit1" value="GET HELP" onclick={handleclick}/>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}
export default Siteinfo;