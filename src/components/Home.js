import { useEffect, useState } from 'react'
import Gif from './Gif'

function Home() {
    const url = 'https://api.giphy.com/v1/gifs/trending'
    const API_KEY = 'N10RDtXqzJIfgeVunNgnAKCi2Phk6S6q'
    const limit = 9

    const [topGifs, setTopGifs] = useState([])

    useEffect(() => {
        fetch(`${url}?api_key=${API_KEY}&limit=${limit}&rating=g`)
            .then(response => response.json())
            .then(response => setTopGifs(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1>Top Gifs</h1>
            <ul id="contenedor">
                { 
                    topGifs.map((gif) => {
                        return(
                            <Gif
                                key={gif.id}
                                title={gif.title}
                                url={gif.images.original.url}
                            />
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Home;