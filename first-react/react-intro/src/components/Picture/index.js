import './Picture.css';

import slider from '../../Pictures/slider__main-image.png';
import thumb_slider from '../../Pictures/thumb-slider__image.png';
import thumb_slider1 from '../../Pictures/thumb-slider__image (1).png';

function Picture() {
    return (
        <div className="picture">
            <div className="main-picture"> 
                <img src={slider} />
            </div>
            <div className="menu-picture">
                <div className="menu-picture-item">
                    <img src={thumb_slider} />
                    <span>Опера VS Оперетта</span>
                </div>
                <div className="menu-picture-item">
                    <img src={thumb_slider1} />
                    <span>Антонио Вивальди. Времена года</span>
                </div>
            </div>
        </div>
    );
}

export default Picture;