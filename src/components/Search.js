import { useState, useRef } from 'react'
import Gif from './Gif'

function Search() {
    const url = 'https://api.giphy.com/v1/gifs/search'
    const API_KEY = 'N10RDtXqzJIfgeVunNgnAKCi2Phk6S6q'
    const limit = 9

    const [gifs, setGifs] = useState([])
    const [query, setQuery] = useState("")

    const myBtn = useRef()

    const buscar = () => {
        fetch(`${url}?api_key=${API_KEY}&q=${query}&limit=${limit}&rating=g&lang=en`)
            .then(response => response.json())
            .then(response => setGifs(response.data))
            .catch(error => console.log(error))
    }


    return (
        <div style={{marginTop: '2rem'}}>
            <input 
                className="input-search"
                value={query} 
                onChange={e => setQuery(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? myBtn.current.click() : null }
            />
            <button className="btn-search" onClick={buscar} ref={myBtn}><i className="fas fa-search"></i></button>
            <br /> <hr /> <br />
            <h2 style={{ color: 'white' }}>Results: </h2>
            {
                gifs.length === 0 &&
                <h3 style={{ color: 'white' }}>¡Deberías empezar por buscar algo que te guste!</h3>
            }
            <ul id="contenedor">
                {
                    gifs.map((gif) => {
                        return(
                            <Gif key = {gif.id}
                                title = {gif.title}
                                url= {gif.images.original.url}
                            />
                        )
                    })
                }
            </ul>
            
        </div>
    );
}

export default Search;