import { Component } from 'react'
import { getFID } from 'web-vitals';
import GifElement from './Gifs';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            gifs: []
        }
    }

    componentDidMount() {
        const search = this.props.location.search; 
        const query = new URLSearchParams(search).get("q");
        console.log(query)
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=N10RDtXqzJIfgeVunNgnAKCi2Phk6S6q&q=${query}&limit=10&rating=g&lang=en`)
            .then(response => response.json())
            .then(response => {
                this.setState({ gifs: response.data });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <h1>Results: </h1>
                <ul id="contenedor">
                    {
                        this.state.gifs.map((gif) => {
                            return(
                                <GifElement
                                    link = {gif.images.original.id}
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
}

export default Search;