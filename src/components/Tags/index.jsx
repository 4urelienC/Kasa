function Tags(props) {
    const tags = props.tags;

    return (
        <div className='infoPart2__tags'>
            {tags.map((item, index) => ( 
                <p key={index} className="infoPart2__tags__tag">{item}</p> 
            ))}
        </div>
    );
}

export default Tags;