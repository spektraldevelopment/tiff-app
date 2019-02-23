import React, { Component } from 'react';
import { BeatLoader } from 'react-spinners';

class LoadingScreen extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <BeatLoader />
                </div>
            </div>
        );
    }
}

export default LoadingScreen;