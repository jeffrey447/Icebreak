import React, { Component } from 'react';

import './typed.scss';

class typed extends Component{
    static defaultProps = {
        heading: "",
        dataText: []
    }

    constructor(props){
        super(props);

        this.state = {
            text: "",
            isDeleting: false,
            loopNum: 0,
            typingSpeed: 150,
        }
    }

    componentDidMount() {
        this.handleType();
    }

    handleType = () => {
        const { dataText } = this.props;
        const { isDeleting, loopNum, text, typingSpeed } = this.state;
        let i = loopNum % dataText.length;
        const fullText = dataText[i];

        // "?" & ":" are conditional operators. "?" as "then" and ":" as else.
        // condition ? value-if-true : value-if-false.
        this.setState({
            text: isDeleting ? fullText.substring(0, text.length - 1 ) : fullText.substring(0, text.length + 1),
            typingSpeed: isDeleting ? 30 : 150
        });

        if (!isDeleting && text === fullText){
            setTimeout( () => this.setState({ isDeleting: true }), 500);
            console.log(i);
        } else if (isDeleting && text === ""){
            this.setState({
                isDeleting: false,
                loopNum: loopNum + 1
            });
        }

        setTimeout(this.handleType,typingSpeed);
    };

    render(){
        return(
            <h1 className="title"> {this.props.heading }
                <span>{ this.state.text }</span>
                <span id="cursor"/>
            </h1>
        )
    }


}

export default typed;