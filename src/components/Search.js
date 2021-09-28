import { Component } from 'react'
import { getFID } from 'web-vitals';


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
                <ul>
                    {
                        this.state.gifs.map((gif) => {
                            return (
                                <li key={gif.images.original.id}>
                                    <img src={gif.images.original.url} alt={gif.images.original.id} />
                                    <h3>{gif.title}</h3>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Search;