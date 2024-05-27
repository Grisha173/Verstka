import './Header.css';

import logo from '../../Pictures/logo.png';
import Menu from '../Menu';

function Header() {
    return (
        <header>
            <div className="container">
                <img className="logo" src={logo} />
                <Menu />
            </div>
        </header>
    );
}

export default Header;