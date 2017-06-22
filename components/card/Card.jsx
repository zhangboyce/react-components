'use strict';

import React, { Component, PropTypes } from 'react';
import './card.less';
import PseudoClassComponentWrapper from '../PseudoClassComponentWrapper.jsx';
import Tips from '../tip/Tips.jsx';
import Tip from '../tip/Tip.jsx';

class Card extends Component {

    render() {
        let { onClick, cover, title, author, desc, readNum, likeNum, createdDate  } = this.props;
        return (
          <div className="react-component-card" onClick={ () => { onClick && onClick() } }
               style={{ cursor: (onClick ? 'pointer' : 'inherit') }}>

              <img src={ cover } />
              <div>
                  <h4>
                      { title }
                  </h4>
                  <div className="author">
                      <span>{ author || '' }</span>
                  </div>
                  <p>{ desc }</p>
                  <Tips gap="4px">
                      <Tip className="fa fa-eye" tip={ readNum } style={{ fontSize: "12px" }} />
                      <Tip className="fa fa-heart" tip={ likeNum } style={{ fontSize: "12px" }}/>
                      <Tip className="fa fa-calendar-plus-o" tip={ createdDate } style={{ fontSize: "12px" }} />
                  </Tips>
              </div>
          </div>
        );
    }
}

Card.propTypes = {
    cover:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    onClick:PropTypes.func,
    author:PropTypes.string,
    desc:PropTypes.string,
    readNum:PropTypes.number,
    likeNum:PropTypes.number,
    createdDate:PropTypes.string
};

export default PseudoClassComponentWrapper(Card);