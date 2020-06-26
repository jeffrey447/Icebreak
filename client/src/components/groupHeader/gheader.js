import React, { Component } from 'react';

//Importing Components
import Navbar from '../navbar/navbar'

//Importing CSS
import '../groupHeader/gheader.scss'

class GroupHeader extends Component {
    render() {
        return(
            <div className="groupHeader-container">
                <div className="groupBanner">
                    <Navbar/>
                </div>
                <div className="groupInfo d-flex justify-content-between">
                    <div className="left-groupInfo d-flex justify-content-left">
                        <div className="groupLogo">
                            <img src="#" alt="placeholder"></img>
                        </div>
                        <div className="groupInfo-heading">
                            <h3> {this.props.groupName} </h3>
                            <h6> {this.props.groupGenre}</h6>
                            <h6> @MIT </h6>
                        </div>
                        <div className="groupInfo-divider"></div>
                        <ul className="groupLabels text-center">
                            <li className="groupLabels-title"> Position </li>
                            <li className="groupLabels-number"> Member</li>
                        </ul>
                        <ul className="groupLabels text-center">
                            <li className="groupLabels-title"> Rank </li>
                            <li className="groupLabels-number"> #999</li>
                        </ul>
                        <ul className="groupLabels text-center">
                            <li className="groupLabels-title"> Level </li>
                            <li className="groupLabels-number"> 1</li>
                        </ul>
                    </div>
                    <div className="right-groupInfo">
                        <ul className="groupLabels text-center">
                            <li className="groupLabels-title"> Members </li>
                            <li className="groupLabels-number"> {this.props.memberCount || 0} </li>
                        </ul>
                    </div>
                </div>
                <div className="groupNavbar">
                    <ul className="d-flex justify-content-center">
                        <li> Feed </li>
                        <li> Events </li>
                        <li> Leaderboard </li>
                        <li> Wall </li>
                        <li> Resources </li>
                        <li> About </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default GroupHeader

