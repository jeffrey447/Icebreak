import React, { Component } from 'react';

import './particles.scss';

class Dots extends Component{
    constructor(props){
        super(props);

        this.state = {
            dots: 0,
        }
    }

    createDots() {
        for (let i = 0; i < 30; i++){
            
        }
    }

    componentDidMount() {
        this.createDots();
    }

    render() {
        return(
            <a> dank memes </a>
        )
    }
}

class Particles extends Component{

    constructor(props){
        super(props);
        this.getCanvas = React.createRef();
    }

    componentDidMount() {
        this.context = this.getCanvas.current.getContext("2d");
    }

    render() {
        return(
            <canvas className="particles-container" ref={ this.getCanvas}>
                <Dots/>
            </canvas>
        )
    }
}

export default Particles;