import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'
import imgLogo from '../../assets/logo.png'
import {useState,useEffect} from 'react'

const Header = () =>{
    const [showDropNav,setShowDropNav]=useState(false)

    const handleShowNav=()=>{
        setShowDropNav(true)
    }
    const handleClosNave=()=>{
        setShowDropNav(false)
    }
    useEffect(()=>{
        setShowDropNav(false)
    },[NavLink])
    return(
        <div className={classes.Header}>
            <div>
                <img src={imgLogo}></img>
            </div>
            <div>
                <ul>
                    <span className={classes.dropNav}>{!showDropNav && <li><i onClick={handleShowNav} className="fas fa-stream"></i></li>}</span>
                    <span className={classes.wideNave}>
                        <li><NavLink activeclassname={classes.active} to='/home'>Home Page</NavLink></li>
                        <li><NavLink activeclassname={classes.active} to='/contact_us'>Contact Us</NavLink></li>
                    </span>
                </ul>
            </div>
            <div className={showDropNav?classes.navDropListShow:classes.navDropList}>
                <div className={classes.closeNav}>
                    <i onClick={handleClosNave} className="fas fa-times"></i>
                </div>
                <div>
                    <img src={imgLogo}></img>
                </div>
                <ul>
                    <li><NavLink activeclassname={classes.active} to='/home'>Home Page</NavLink></li>
                    <li><NavLink activeclassname={classes.active} to='/contact_us'>Contact Us</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Header