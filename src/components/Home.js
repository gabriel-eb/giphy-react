import { Component } from 'react'
import { getFID } from 'web-vitals';
import GifElement from './Gifs';



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
                <ul id="contenedor">
                    { 
                        this.state.topGifs.map((gif) => {
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

export default Home;