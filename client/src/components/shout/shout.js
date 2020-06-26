import React, { Component } from 'react';

// import images
import imgPlaceHolder from './../../assets/images/placeholder-profile.jpg';

//Importing CSS
import './shout.scss'
import SendBtn from './../../assets/images/sendBtn.svg';

class Shout extends Component {
    render() {
        return(
            <section className="mt-4 shout-wrapper container">
                <h1> Shout </h1>
                <div className="shout-container">
                    <div className="shout-header">
                        <div className="profile-picture">
                            <img src={imgPlaceHolder} alt="place-holder"/>
                            <div className="online-status"></div>
                        </div>
                        <div className="user-name-position">
                            <h3> John Doe </h3>
                            <h5> President </h5>
                        </div>
                    </div>
                    <div className="shout-entry">
                        <div className="information pt-5">
                            Lorem ipsum dolor sit amet, id duo ferri simul inciderint, qui ex nominati expetenda. 
                            Suscipit delectus ad mel, ne velit nihil iuvaret duo, in gubergren prodesset similique pro. 
                            Ad nec diam dissentiet, in mea veniam utamur. Probo prodesset sit no, quo ei legendos electram. 
                            An sit aliquam eligendi adolescens, eu quo feugait oportere suavitate, est in homero graeci possim. 
                            At pri solet scripta, fastidii scriptorem eu sea.
                        </div>
                        <div className="postedBy text-right py-2">
                            Tuesday, March  18 , 2019 | 3:34 PM
                        </div>
                        <form className="shout-input-container">
                            <input className="shout-input py-2 px-2" type="text" placeholder="Enter your shout"/>
                            <button type="submit">
                                <img src={SendBtn} alt="shout-send-btn"></img>
                            </button>
                        </form>
                    </div>
                </div>

            </section>
        );
    }
}

export default Shout