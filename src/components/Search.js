import { Component } from 'react'
import Gif from './Gif';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            gifs: [],
            query: ""
        }
        this.buscar = this.buscar.bind(this)
    }

    buscar() {
        const url = 'https://api.giphy.com/v1/gifs/search'
        const API_KEY = 'N10RDtXqzJIfgeVunNgnAKCi2Phk6S6q'
        const limit = 9

        fetch(`${url}?api_key=${API_KEY}&q=${this.state.query}&limit=${limit}&rating=g&lang=en`)
            .then(response => response.json())
            .then(response => this.setState({ gifs: response.data }))
            .catch(error => console.log(error))
    }


    render() {
        return (
            <div style={{marginTop: '2rem'}}>
                <input 
                    className="input-search"
                    value={this.state.query} 
                    onChange={(e) => this.setState({query: e.target.value})}
                    onKeyPress={(e) => e.key === 'Enter' ? document.getElementById("myBtn").click() : null }
                />
                <button className="btn-search" onClick={this.buscar} id="myBtn"><i className="fas fa-search"></i></button>
                <br /> <hr /> <br />
                <h2 style={{ color: 'white' }}>Results: </h2>
                <ul id="contenedor">
                    {
                        this.state.gifs.map((gif) => {
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
}

export default Search;