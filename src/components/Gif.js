function Gif(props) {
    
    return (
        <li className="gifElement">
            <img src={props.url}  alt={props.id} />
            <h3>{props.title}</h3>
        </li>
    );
}

export default Gif;