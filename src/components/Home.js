import { Component } from 'react'
import Gif from './Gif'



class Home extends Component {
    constructor(){
        super();
        this.state = {
            topGifs: []
        }
    }

    componentDidMount(){
        const url = 'https://api.giphy.com/v1/gifs/trending'
        const API_KEY = 'N10RDtXqzJIfgeVunNgnAKCi2Phk6S6q'
        const limit = 9

        fetch(`${url}?api_key=${API_KEY}&limit=${limit}&rating=g`)
            .then(response => response.json())
            .then(response => this.setState({ topGifs: response.data }))
            .catch(error => console.log(error));
    }    

    render(){
        return (
            <div>
                <h1>Top Gifs</h1>
                <ul id="contenedor">
                    { 
                        this.state.topGifs.map((gif) => {
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
}

export default Home;