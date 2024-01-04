import React, { useState } from 'react';

function Carrousel(props) {
    const { pictures } = props;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };

    if (!pictures || pictures.length === 0) {
        return <div>Aucune image disponible.</div>;
    }

    return (
        <div className="carrousel">
            {pictures.length > 1 && (
                <>
                    <button className="carrousel__prev" onClick={goToPreviousImage}>
                        <i className="fa-sharp fa-solid fa-angle-up"></i>
                    </button>
                    <p className="carrousel__nbr">{currentImageIndex + 1}/{pictures.length}</p>
                    <button className="carrousel__next" onClick={goToNextImage}>
                        <i className="fa-sharp fa-solid fa-angle-up"></i>
                    </button>
                </>
            )}
            <img src={pictures[currentImageIndex]} alt={pictures[currentImageIndex]} className="carrousel__pix" />
        </div>
    );
}

export default Carrousel;