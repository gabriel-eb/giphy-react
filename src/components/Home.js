import { Component } from 'react'
import { getFID } from 'web-vitals';


class Home extends Component {
    constructor(){
        super();
        this.state = {
            topGifs: []
        }
    }

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=N10RDtXqzJIfgeVunNgnAKCi2Phk6S6q&limit=10&rating=g')
            .then(response => response.json())
            .then(response => {
                this.setState({ topGifs: response.data });
            })
            .catch(error => console.log(error));
    }    

    render(){
        return (
            <div>
                <h1>Top Gifs</h1>
                <ul>
                    { 
                        this.state.topGifs.map((gif) => {
                            return(
                                <li key={gif.images.original.id}>
                                    <img src={gif.images.original.url}  alt={gif.images.original.id} />
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

export default Home;