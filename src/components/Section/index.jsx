function Section(props) {
    const source = props.src;
    const alter = props.alt;
    const text = props.txt;

    return (
    <div className="sectionTop">
        <h1 className="sectionTop__title">{text}</h1>
        <img src={source} alt={alter} className="sectionTop__img"></img>
    </div>
    );
  }

  export default Section;