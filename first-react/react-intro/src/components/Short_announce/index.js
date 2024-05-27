import './Short_announce.css';

import vector from '../../Pictures/vector.png';


function Short_announce() {
    return (
        <div className="short-announce">
            <div className="announce-calendar">
                <h2>Краткие анонсы</h2>
                <div className="calendar">
                    <img src={vector} />
                    <span>Все мероприятия</span>
                </div>
            </div>
            <div className="sessions">
                <a className="sinatra" href="">
                    <div className="sinatra-square">
                        <span>3</span>
                        <span>июня</span>
                    </div>
                    <span>"ВЕК имени СИНАТРЫ"</span>
                </a>
                <a className="sinatra" href="">
                    <div className="sinatra-square">
                        <span>3</span>
                        <span>июня</span>
                    </div>
                    <span>"ВЕК имени СИНАТРЫ"</span>
                </a>
                <a className="sinatra" href="">
                    <div className="sinatra-square">
                        <span>3</span>
                        <span>июня</span>
                    </div>
                    <span>"ВЕК имени СИНАТРЫ"</span>
                </a>
                <a className="sinatra" href="">
                    <div className="sinatra-square">
                        <span>3</span>
                        <span>июня</span>
                    </div>
                    <span>"ВЕК имени СИНАТРЫ"</span>
                </a>
            </div>
        </div>
    );
}

export default Short_announce;