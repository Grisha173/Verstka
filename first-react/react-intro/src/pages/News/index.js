import './News.css';

import news__image from '../../Pictures/news__image.png';
import news__image1 from '../../Pictures/news__image (1).png';

function News() {
    return (
        <div className='news_container'>
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
        </div>
    );
}

export default News;