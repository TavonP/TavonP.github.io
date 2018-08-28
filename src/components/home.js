import React, { Component } from 'react'

//COMPONENTS
import Banner from '../components/banner'
import ArtistList from './artist_list'

const URL_ARTISTS = "http://localhost:3004/artists";

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            artists: ''
        }
    }

    componentDidMount(){
        fetch(URL_ARTISTS, {
            method: 'GET'
        }).then(response => response.json())
        .then(json => {
            this.setState({
                artists: json
            })
        })
    }

    render(){
        return(
            <div>
                <Banner/>
                <ArtistList allArtists={this.state.artists}/>
            </div>
        )
    }
}

export default Home;