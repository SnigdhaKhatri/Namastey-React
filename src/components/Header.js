import { useState } from 'react'
import {LOGO_URL} from '../util/Constant'
import { Link } from 'react-router-dom'

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    return (
    <div className="header">
        <img className="app-logo" src={LOGO_URL}></img>
        <h2 className="app-name">Delish</h2>
        <ul className="nav-bar">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About Us</Link></li>
            <li><Link to={"/contact"}>Contact Us</Link></li>
            <li>Cart</li>
            <button className='loginBtn' onClick={() => {
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}>{btnName}</button>
        </ul>
    </div>)
}


export default Header