function Rates(props) {
    const rates = props.rates;
    const maxStars = 5; // Nombre maximum d'étoiles

    // Générer une chaîne de caractères contenant des 'A' pour le nombre d'étoiles pleines (rates) et des 'O' pour le nombre d'étoiles manquantes
    const stars = '★'.repeat(rates) + '☆'.repeat(maxStars - rates);

    return (
        <div className='rates'>
            {stars.split('').map((star, index) => (
                <span key={index} className={star === 'A' ? 'star-filled' : 'star-empty'}>
                    {star === '★' ? <i class="fa-solid fa-star stars star-filled"></i> : <i class="fa-solid fa-star stars star-empty"></i>}
                </span>
            ))}
        </div>
    );
}

export default Rates;