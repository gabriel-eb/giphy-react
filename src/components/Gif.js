function Gif({url, title}) {
    
    return (
        <li className="gifElement">
            <img src={url}  alt={title} />
            <h3>{title}</h3>
        </li>
    );
}

export default Gif;