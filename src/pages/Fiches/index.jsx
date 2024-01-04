import { useParams, Navigate } from 'react-router-dom';
import { appartList } from '../../datas/Appartements.js';

import Carrousel from '../../components/Carrousel'
import Hote from '../../components/Hote'
import Tags from '../../components/Tags'
import Rates from '../../components/Rates'
import Collapse from '../../components/Collapse'

function Fiches() {
    let { title } = useParams();

    const selectedAppart = appartList.find(item => item.title === title);


    if (!selectedAppart) {
      return <Navigate to="/erreur" replace />;
    }

    const appartData = { ...selectedAppart };

  return (
    <div>
      <Carrousel pictures={appartData.pictures} />
      {/* <InfoPart1 title={appartData.title} loc={appartData.location} hostName={appartData.host.name} hostPix={appartData.host.picture}/> */}
      <div className='info'>
        <div className='info__L'>
          <h1 className='info__L__title'>{appartData.title}</h1>
          <p className='info__L__loc'>{appartData.location}</p>
          <Tags tags={appartData.tags}/>
        </div>
        <div className='info__R'>
          <Hote hostName={appartData.host.name} hostPix={appartData.host.picture}/>
          <Rates rates={appartData.rating}/>
        </div>
      </div>
      <div className='duoCollapse'>
        <div className='duoCollapse__size'>
          <Collapse title='Description' text={appartData.description} id='0371' />
        </div>
        <div className='duoCollapse__size'>
          <Collapse title='Équipements' text={appartData.equipments.map((item, index) => ( <p key={index}>{item}</p> ))} id='0372' />
        </div>
      </div>
    </div>
  );
}

export default Fiches;