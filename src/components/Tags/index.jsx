function Tags(props) {
    const tags = props.tags;

    return (
        <div className='info__L__tags'>
            {tags.map((item, index) => ( 
                <p key={index} className="info__L__tags__tag">{item}</p> 
            ))}
        </div>
    );
}

export default Tags;