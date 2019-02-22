import React, { Component } from 'react';

class MovieItem extends Component {
    render() {

        return (
            <div className="container movie">
                <div className="row justify-content-center">
                    <div className="col">
                        <img alt="" src={this.props.poster} />
                    </div>
                    <div className="col">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                        <p className="genres">{this.props.genres}</p>
                        <p>{this.props.tagline}</p>
                        <p>{this.props.runtime} Minutes</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieItem;