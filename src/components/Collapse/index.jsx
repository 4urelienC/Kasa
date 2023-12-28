import { useState } from 'react';

function Collapse(props) {
    const title = props.title;
    const text = props.text;
    const id = props.id;

    // État pour contrôler si le contenu du collapse est affiché ou masqué
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour gérer le changement d'état de la case à cocher
   const handleCheckboxChange = () => {
        setIsOpen(!isOpen); // Inversion de l'état actuel
    };

    return (
        <div>
            <div className='kasa-collapse'>
                <p className="kasa-collapse__title">{title}</p>
                <input id={id} type="checkbox" className='kasa-collapse__btn' 
                checked={isOpen} onChange={handleCheckboxChange} />
                <label for={id}><i class="fa-solid fa-chevron-up fa-2xl kasa-collapse__logo"></i></label>
            </div>
            <div className={`kasa-collapse__content ${isOpen ? 'open' : ''}`}>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Collapse