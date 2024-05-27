import './News_and_reviews.css';

import news__image from '../../Pictures/news__image.png';
import news__image1 from '../../Pictures/news__image (1).png';
import calendar__image from '../../Pictures/calendar__image.png';

function News_and_reviews() {
    return (
        <div className="news-and-reviews">
            <div className="news">
                <div className="news-zagolovok">
                    <h2>Новости</h2>
                </div>
                <div className="pictures-text">
                    <div className="left">
                        <div className="left-right-picture">
                            <img src={news__image} />
                        </div>
                        <div className="left-right-zag">
                        <span>Переносы / Отмена мероприятий</span>
                        </div>
                        <div className="left-right-text">
                            <span>11.04.2023 г. в 19.00 час. — концерт «Опера vs. Оперетта» - ПЕРЕНОС на 05.06.2023 г. в 19.00 час.</span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="left-right-picture">
                            <img src={news__image1} />
                        </div>
                        <div className="left-right-zag">
                            <span>Переносы / Отмена мероприятий</span>
                        </div>
                        <div className="left-right-text">
                            <span>11.04.2023 г. в 19.00 час. — концерт «Опера vs. Оперетта» - ПЕРЕНОС на 05.06.2023 г. в 19.00 час.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="reviews">
                <div className="reviews-picture-july">
                    <img src={calendar__image} />
                    <span>Обзорные экскурсии</span>
                </div>
                <div className="july-buttons">
                    <div className="july">
                        <div className="july-zag">
                            <h2>Июль</h2>
                        </div>
                        <div className="july-menu">
                            <button>&lt;</button>
                            <button>&gt;</button>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="gray">1</button>
                        <button className="green">2</button>
                        <button className="gray">3</button>
                        <button className="gray">4</button>
                        <button className="green">5</button>
                        <button className="gray">6</button>
                        <button className="green">7</button>
                        <button className="gray">1</button>
                        <button className="green">2</button>
                        <button className="gray">3</button>
                        <button className="gray">4</button>
                        <button className="green">5</button>
                        <button className="gray">6</button>
                        <button className="green">7</button>
                        <button className="gray">1</button>
                        <button className="green">2</button>
                        <button className="gray">3</button>
                        <button className="gray">4</button>
                        <button className="green">5</button>
                        <button className="gray">6</button>
                        <button className="green">7</button>
                        <button className="gray">1</button>
                        <button className="green">2</button>
                        <button className="gray">3</button>
                        <button className="gray">4</button>
                        <button className="green">5</button>
                        <button className="gray">6</button>
                        <button className="green">7</button>
                        <button className="gray">1</button>
                        <button className="green">2</button>
                        <button className="gray">3</button>
                        <button className="gray">4</button>
                        <button className="green">5</button>
                        <button className="gray">6</button>
                        <button className="green">7</button>                
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News_and_reviews;