import './Menu.css';

function Menu() {
    return (
        <nav className="navigation" >
            <a href="/" >Афиша</a>
            <span className="square"></span>
            <a href="/">Заказ билетов</a>
            <span className="square"></span>
            <a href="/">Контакты</a>
            <span className="square"></span>
            <a href="/">История дворца</a>
            <span className="square"></span>
            <a href="/">Галерея</a>
            <span className="square"></span>
            <a href="/">Планы залов</a>
        </nav>
    );
}

export default Menu;