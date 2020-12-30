import React from 'react';
import LineGraph from './LineGraph';
import './NewsFeed.css';
import TimeLine from './TimeLine';

function NewsFeed() {
  return (
    <div className="newsfeed" >
      <div className="newsfeed__container">
        <div className="newsfeed__chartSection">
          <div className="newsfeed__portfolio">
            <h1>$114,556</h1>
            <p> +$44.63 (++0.04%) Today</p>
          </div>
          <div className="newsfeed__chart">
            <LineGraph />
            <TimeLine />
          </div>
          <div className="newsfeed__buying--section">
            <p>Buying Power</p>
            <p>$4.50</p>
          </div>
          <div className="newsfeed__market--section">
            <div className="newsfeed__market--content">
              <p>
                Market Closed
                <br/> Lorem ipsum dolor sit amet, consectetur adipisicing.
                <span>X</span>
              </p>
              <h1>Happy Thanksgiving</h1>
            </div>
            <div className="controls">
              <p>&lt; 1 of 1 &gt;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsFeed
