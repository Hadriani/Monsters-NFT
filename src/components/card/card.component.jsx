
import './card.styles.css';

const Card = ({monsters}) => {
    const { name, email, id } = monsters;
    return (
            <div className='card-container' key={id}>
                <img
                    alt={`monsters ${name}`}
                    src={`https://robohash.org/${id}?set=set2&size=180x180`}
                />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
    );
}



export default Card;