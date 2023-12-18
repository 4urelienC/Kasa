function Collapse(props) {
    const title = props.title;
    const text = props.text;
    return (
        <div>
            <div className='kasa-collapse'>
                <p className="kasa-collapse__title">{title}</p>
                <button onclick="yourFunction()" className='kasa-collapse__btn'>
                    <i class="fa-solid fa-chevron-up fa-2xl kasa-collapse__btn__logo"></i>
                </button>
                {/* <button type="button" className="kasa-collapse__btn"><i class="fa-solid fa-chevron-up"></i></button> */}
            </div>
            <div className="kasa-collapse__content">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Collapse