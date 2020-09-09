import React,{Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Card.css'
class Card extends Component {
    render()
    {
        return(

            <div className="card">
                <img className="card-img" src={require(`../../photos/${this.props.pic.toLowerCase()}.png`)} alt="img"/>
                <div className="card-img-overlay">
                    <div className="card-body">
                        <h5 className="card-link ct"><a href="#"> Online Education </a></h5>
                    </div>
                </div>
            </div>

        )
    }
}
export default Card