import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Card2.css'
class Card2 extends React.Component {
    render(){
        return(
            <div className="card-wrapper" style={{padding:"20px"}}>
                <div className="card c2" style={{width:"14rem",height:"18rem"}}>
                    <img className="card-img-top" src={require(`../../photos/${this.props.img_name}.png`)} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text"><a href="#" className="link">Keep Reading...</a></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card2;