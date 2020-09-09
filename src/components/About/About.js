import React from 'react'
import './About.css'
import flower from '../../photos/flower.png'
import college from '../../photos/college.png'
function About()
{
    return(
        <div className="about-container">
            <div className="circle-wrapper">
                <div className="circle">
                    <div className="ball">
                        <img src={flower} alt="flower" id="flower"/>
                        <div className="inner-circle">
                            <div className="inner-circle-mid">
                                <div className="photoCollege">    
                                    <a href="#">
                                        <img src={college} alt="college" id="college"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-text">
                <h3>Limitless Learning,more<br/> possibilities</h3>
                <p>
                    The university of Rochester is one of the country's top-tier
                    research Universities. Our campuses are home to 200
                    academic majors, more than 2,000 faculty and instructional
                    staff, and some 10,000 students-spproximately half of whom are women.<br/>
                    Learning at the University of Rochester is also on a very personal
                    scale. Rochester remains one of the smallest and most colligate
                    among top research universities, with smaller classes, a low 10:1
                    student to teacher ratio, and increased interactions with faculty.
                </p>
                <div className="about-highlight-text">
                    <h5 style={{color:"#ffba00"}}><div style={{fontWeight:"700"}}>4000<br/></div>Students</h5>
                    <h5 style={{color:"#ff5f72"}}><div style={{fontWeight:"700"}}>260<br/></div>Courses</h5>
                    <h5 style={{color:"#43cb83"}}><div style={{fontWeight:"700"}}>5679<br/></div>Hours Video</h5>
                </div>
            </div>
        </div>

    )
}

export default About;