import React from 'react'
import './Slider.css'
import Navi from '../Navi/Navi'
function Slider() {
    return(
        <div className="Slide">
            <Navi/>
           <div className="main-text"><h2>Innovation for Education <br/> and society</h2>
                <h4>Our interdisciplinary majors and minors mean you can<br/>chart your course for academic succcess</h4>
                <button type="button" className="btn-default">Visit Our Campus</button>
           </div>
        </div>
    )
}
export default Slider;