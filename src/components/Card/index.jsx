import { Link } from 'react-router-dom';
import { appartList } from '../../datas/Appartements.js'


function Card() {
    

	return (
        <div className='kasaGalerie'>
            {appartList.map(item => (
                <Link to={`/fiche-logement/${item.title}`} key={item.id} className="kasaGalerie__card">
                    <img src={item.cover} alt={item.cover} className="kasaGalerie__card__pix"/>
                    <p className="kasaGalerie__card__title">{item.title}</p>
                    <span className="kasaGalerie__card__shadow">   </span>
                </Link>
            ))}
        </div>
      );
}

export default Card