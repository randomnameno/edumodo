import React from 'react'
import './Department.css'
import Card from '../card/Card'
function Department()
{
    const card_prop=['../../photos/card1.png','card2','card3']
    return(
        <div className="department-wrapper">
            <div className="text">
                <h3>
                    Our Department
                </h3>
                <p>A hundred thousand grateful loves to your dear papa and mamma.</p>
                <p>Is your poor brother recovered of his rack-punch? Oh, dear! Oh, dear! How men</p>
                <p>should beware of wicked punch.</p>
            </div>
            <div className="cards" id="cards">
                {
                    card_prop.map((name)=>{
                        return <Card pic={name}/>
                    })
                }
            
            </div>
        </div>
    )
}
export default Department;
