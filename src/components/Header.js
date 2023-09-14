import {LOGO_URL} from '../util/Constant'

const Header = () => (
    <div className="header">
        <img className="app-logo" src={LOGO_URL}></img>
        <h2 className="app-name">Delish</h2>
        <ul className="nav-bar">
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
        </ul>
    </div>
)

export default Header