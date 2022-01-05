import classes from './Footer.module.css';
import imgLogo from '../../assets/logo.png'
import {NavLink} from 'react-router-dom'

const Footer = () => {
    return (
        <div className={`${classes.Footer}`}>
            <div className={`container d-flex justify-content-between`}>
                <div style={{paddingBottom:'1.1rem'}}>
                    <img src={imgLogo}></img>
                </div>
                <div style={{paddingBottom:'1.1rem'}}>
                    <ul>
                        <li><NavLink to='/contact_us'>Contact Us</NavLink></li>
                        <li><NavLink to='/home'>Explore</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer