import { Component } from 'react';

const GifElement = (props) =>  {
    
    return (
        <div>
            <li className="gifElement" key={props.id}>
                <img src={props.url}  alt={props.id} />
                <h3>{props.title}</h3>
            </li>
        </div>
    );
}

export default GifElement;