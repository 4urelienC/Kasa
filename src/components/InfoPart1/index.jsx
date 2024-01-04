function InfoPart1(props) {
    const title = props.title;
    const loc = props.loc;
    const hostName = props.hostName;
    const hostPix = props.hostPix;

    const [firstName, lastName] = hostName.split(" ");

    return (
        <div className='infoPart1'>
            <div className='infoPart1__L'>
            <h1 className='infoPart1__L__title'>{title}</h1>
            <p className='infoPart1__L__loc'>{loc}</p>
            </div>
            <div className='infoPart1__R'>
            <p className='infoPart1__R__name'>{firstName} <br />{lastName}</p>
            <img src={hostPix} alt={hostName} className="infoPart1__R__img"></img>
            </div>
      </div>
    );
}

export default InfoPart1;