'use strict';

import React, { Component, PropTypes } from 'react';
import './card.css';

export default class Card extends Component {

    render() {
        let { cover, title, author, desc, readNum, likeNum, createdDate  } = this.props;
        return (
          <div className="react-component-card">
              <img src={ cover } />
              <div>
                  <h4>{ title }</h4>
                  <div>{ author || '' }</div>
                  <p>{ desc }</p>
                  <div>
                      <span className="fa fa-eye">&nbsp;<i>{ readNum || '-' }</i></span>
                      <span className="fa fa-heart">&nbsp;<i>{ likeNum || '-' }</i></span>
                      <span className="fa fa-calendar-check-o">&nbsp;<i>{ createdDate || '-' }</i></span>
                  </div>
              </div>
          </div>
        );
    }
}

Card.propTypes = {
    cover:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    author:PropTypes.string,
    desc:PropTypes.string,
    readNum:PropTypes.string,
    likeNum:PropTypes.string,
    createdDate:PropTypes.string,
    onClick:PropTypes.func
};