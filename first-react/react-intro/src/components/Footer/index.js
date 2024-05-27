import './Footer.css';

import logo from '../../Pictures/logo.png';
import Contacts from '../Contacts';

function Footer() {
    return (
        <footer>
                <div className="end">
                    <img src={logo} />
                    <div className="merop">
                        <span>Мероприятия</span>
                        <nav className="navigation2">
                            <a href="/" >Экскурсии</a>
                            <a href="/" >Концерты</a>
                            <a href="/" >Афиша</a>
                        </nav>
                    </div>
                    <Contacts />
                </div>
                <div className="sait-ko">
                    <span>Сайт ко</span>
                </div>
        </footer>
    );
}

export default Footer;