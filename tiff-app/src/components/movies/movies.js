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
                this.setState({
                    movieList : response.data.results
                });
            })
            .catch(function (error) {
                // handle error
                console.error(error);
            })
    }

    render() {

        let movies = this.state.movieList;
        let movieList = Object.keys(movies).map(key => {
            let movie = movies[key];
            let movieId = `/movie?movieId=${movie.id}`;
            let imagePath = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`

            console.log("Movie: ", movie);

            return (
            <li key={movie.id} className="list-group-item">
                <Link className="nav-link" to={movieId}>
                {/* <img className="float-left" alt={movie.title} src={imagePath}/>
                <div className="float-right">{movie.title}</div> */}
                <div className="card w-50" >
                    <img class="card-img-top" src={imagePath} alt={movie.title} />
                    <div class="card-body float-right">
                        <h5 class="card-title">{movie.title}</h5>
                    </div>
                    </div>
                </Link>
            </li>
            );
        });

        return(
            <div className="container">
                <div className="row justify-content-center">
                    <h1 className="col-md-6">Movies</h1>
                </div>

                <div className="row justify-content-center">
                    <ul className="col-md-6 list-group">{movieList}</ul>
                </div>
            </div>
        );
    }
}

export default Movies;