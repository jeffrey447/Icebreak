import React, { Component } from 'react';
// Importing CSS
import './home.scss'

import store from '../../store';
import { getUser } from '../../actions/authAction';

class Home extends Component {

    componentDidMount() {
        store.dispatch(getUser());       
    }

    render() {
        return (
            <div className="activity-container">
                dank memes
            </div>
        );
    }
}

export default Home;
