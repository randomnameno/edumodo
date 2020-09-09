import React,{Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
import Card1 from '../../photos/card1.png';
class Card extends Component {
    render()
    {
        const style = {
            backgroundImage: `url("../../photos/card1.png")`,
            backgroundSize: "100% 100%"
        }
        return(

            <div className="card">
                <div className="card-body">
                    <div className="card-link-container">
                        <h5 className="card-link ct"><a href="#"> Online Education </a></h5>
                    </div>
                </div>
            </div>

        )
    }
}
export default Card