import Link from '../Link/Link'
import './Brownies.css'

const Brownies = (props) => {
    return (
        <div className='brownies'>
            <div className='img-brownie'>
                <a href={props.link} target="_blank"> <img src={props.image} alt={props.browniename} /></a>
            </div>
            <div className='name'>
                <h4>{props.browniename}</h4>

            </div>
            <div className='price'>
                <h4>{props.brownieprice}</h4>
            </div>
        </div>
    )
}

export default Brownies