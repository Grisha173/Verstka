import './Concerts.css';

import vector from '../../Pictures/vector.png';
import poster__image from '../../Pictures/poster__image.png';
import style from '../../Pictures/style.png';
import time from '../../Pictures/time.png';
import age from '../../Pictures/age.png';
import poster__image1 from '../../Pictures/poster__image (1).png';


function Concerts() {
    return (
        <div className="concerts">
            <div className="zagolovok">
                <h2>Афиша</h2>
                <div className="events">
                    <img src={vector} />
                    <span>Все мероприятия</span>
                </div>
            </div>
            <div className="dates">
                <div className="dates-item">
                    <div className="dates-data">
                        <div className="chisla">
                            <span>3</span>
                        </div>
                        <div className="june">
                            <span>июня</span>
                        </div>
                    </div>
                    <div className="dates-picture">
                        <img src={poster__image} />
                    </div>
                    <div className="dates-menu">
                        <div className="antonio">
                            <span>Антонио Вивальди. Времена года</span>
                        </div>
                        <div className="posvyat">
                            <span>Посвящение Фрэнку Синатре.</span>
                        </div>
                        <div className="something">
                            <div className="small">
                                <img src={style} />
                                <span>Джаз</span>
                            </div>
                            <div className="small">
                                <img src={time} />
                                <span>19:00</span>
                            </div>
                            <div className="small">
                                <img src={age} />
                                <span>6+</span>
                            </div>
                        </div>
                    </div>
                    <div className="dates-bilet">
                        <button>Заказать билет</button>
                    </div>
                </div>
                <div className="dates-item">
                    <div className="dates-data">
                        <div className="chisla">
                            <span>30</span>
                        </div>
                        <div className="june">
                            <span>июня</span>
                        </div>
                    </div>
                    <div className="dates-picture">
                        <img src={poster__image1} />
                    </div>
                    <div className="dates-menu">
                        <div className="opera">
                            <span>Опера VS Оперетта</span>
                        </div>
                        <div className="sankt">
                            <span>Санкт-Петербургский камерный оркестр Olympic Orchestra</span>
                        </div>
                        <div className="something2">
                            <img src={style}/>
                            <span>Классика</span>
                        </div>
                    </div>
                    <div className="dates-bilet">
                        <button>Заказать билет</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Concerts;