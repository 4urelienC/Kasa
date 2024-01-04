function Hote(props) {
    const hostName = props.hostName;
    const hostPix = props.hostPix;

    const [firstName, lastName] = hostName.split(" ");

    return (
        <div className='info__R'>
            <div className='info__R__hote'>
            <p className='info__R__hote__name'>{firstName} <br />{lastName}</p>
            <img src={hostPix} alt={hostName} className="info__R__hote__img"></img>
            </div>
      </div>
    );
}

export default Hote;