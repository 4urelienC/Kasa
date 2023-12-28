import { appartList } from '../../datas/Appartements.js'


function Card() {
    

	return (
        <div className='kasaGalerie'>
            {appartList.map(item => (
                <div className = "kasaGalerie__card" key={item.id}>
                    <img src={item.cover} alt={item.cover} className="kasaGalerie__card__pix"/>
                    <p className="kasaGalerie__card__title">{item.title}</p>
                    <span className="kasaGalerie__card__shadow">   </span>
                </div>
            ))}
        </div>
      );
}

export default Card