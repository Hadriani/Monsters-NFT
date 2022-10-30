
import Card from '../card/card.component';

import './card-list.styles.css';

const Cardlist = ({monsters}) => (
        <div className='card-list'>
            {monsters.map((monsters) => {
                return <Card monsters={monsters} />;          
            })}
        </div>
    ); 


export default Cardlist;
