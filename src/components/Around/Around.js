import React from 'react'
import Card2 from '../card/Card2'
import './Around.css'
class Around extends React.Component {
    render(){
        return(
            <div>
                <div className="around-wrapper">
                    <div className="cir"></div>
                    <div className="head-word">
                        <h3>Around The University</h3>
                    </div>
                    <div className="about-cards">
                        <Card2 title="Get started with coding android on kotlin " img_name="kotlin"/>
                        <Card2 title="Photoshop CC 2018 Essential Training: The Basics" img_name="photoshop"/>
                        <Card2 title="Create Turntable animations with Cinema 4D" img_name="turntable"/>
                        <Card2 title="A Beginner's Guide to the new Bootstrap 4 grid" img_name="bootstrap"/>
                        <Card2 title="A designer's guide to Vue.js Components" img_name="vue"/>
                        <Card2 title="Create a Swift App with Realm Mobile Database" img_name="swift"/>
                        <Card2 title="10 Essential Design Tips in Adobe Illustrator" img_name="ai"/>
                        <Card2 title="Modern PHP from the beginning!" img_name="php"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Around;