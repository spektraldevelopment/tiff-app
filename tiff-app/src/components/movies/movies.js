import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import axios from 'axios';
import './movies.scss';

const API_KEY = '5161b4142bf86fb729803d20fcf3ccab';

class Movies extends Component {

    constructor(props) {
        //passes props to Component
        super(props);

        this.state = {
            movieList: {}
        };

        this.getMoviesList = this.getMoviesList.bind(this);

        this.getMoviesList();
    }

    getMoviesList() {
        const reqUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_year=2019&with_release_type=3%7C2&with_original_language=en`;

        axios.get(reqUrl)
            .then((response) => {
                // handle success
                console.log("Got a RES: ", response);
                this.setState({
                    movieList : response.data.results
                });
            })
            .catch(function (error) {
                // handle error
                console.error(error);
            })
            .then(function () {
                // always executed
            });
    }


    render() {

        let movies = this.state.movieList;

        var movieList = Object.keys(movies).map(key => {
            console.log("Movie!: ", movies[key]);
            let movie = movies[key];
            let movieId = `/movie/${movie.id}`;
            return (<li><Link className="nav-link" to={movieId}>{movie.title}</Link></li>);
        });

        return(
            <div className="container m-3">
                <div className="row justify-content-end">
                    <h1 class="col-6">Movies</h1>
                </div>

                <div className="row justify-content-end">
                    <ul class="col-6">{movieList}</ul>
                </div>
            </div>
        );
    }
}

export default Movies;