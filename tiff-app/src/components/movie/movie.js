import React, { Component } from 'react';
import queryString from 'query-string'
import axios from 'axios';

import './movie.scss';

const API_KEY = '5161b4142bf86fb729803d20fcf3ccab';

class Movie extends Component {

    constructor(props) {
        //passes props to Component
        super(props);

        this.state = {
            title: "",
            description: "",
            genres: [],
            tagline: "",
            runtime: "",
            poster: ""
        };
    }

    render() {

        let genres = this.state.genres.map((item, i) => {
            return i === this.state.genres.length - 1 ? `${item.name}` : `${item.name}, `;
        });

        return (
            <div className="container movie">
                <div className="row justify-content-center">
                    <div className="col">
                        <img alt="" src={this.state.poster} />
                    </div>
                    <div className="col">
                        <h1>{this.state.title}</h1>
                        <p>{this.state.description}</p>
                        <p className="genres">{genres}</p>
                        <p>{this.state.tagline}</p>
                        <p>{this.state.runtime} Minutes</p>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        const movieId = queryString.parse(this.props.location.search).movieId;
        const reqUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
        
        axios.get(reqUrl)
            .then(res => {

                const movieInfo = res.data;

                console.log("MOvie Info: ", movieInfo);

                this.setState({ 
                    title : movieInfo.title,
                    description: movieInfo.overview,
                    genres : movieInfo.genres,
                    tagline : movieInfo.tagline,
                    runtime : movieInfo.runtime,
                    poster: `https://image.tmdb.org/t/p/w370_and_h556_bestv2${movieInfo.poster_path}`
                 })
            })
            .catch(function (error) {
                // handle error
                console.error(error);
            })
      }
}

export default Movie;