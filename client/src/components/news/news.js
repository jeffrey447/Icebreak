import React, { Component } from 'react';

import '../news/news.scss'

import imgPlaceHolder from './../../assets/images/placeholder-profile.jpg';

class News extends Component {
    render() {
        return(
            <section className="news-wrapper container">
                <h1> News </h1>
                <div className="news-container">
                    <div className="news-entry mx-2 my-2">
                        <div className="news-img" style = {{ backgroundImage: 'url(' + imgPlaceHolder + ')'}}></div>
                        <div className="news-content">
                            <div className="label"> Tips </div>
                            <div className="title my-2"> 7 Most In-Demand Programming Languages To Learn In 2020</div>
                            <a href="#"> Read more </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    };
}

export default News;