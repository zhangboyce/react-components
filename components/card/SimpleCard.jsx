'use strict';

import React, { Component, PropTypes } from 'react';
import PseudoClassComponentWrapper from '../PseudoClassComponentWrapper.jsx';
import './card.less';
import Tips from '../tip/Tips.jsx';
import Tip from '../tip/Tip.jsx';

class SimpleCard extends Component {

    render() {
        let { cover, author, desc, readNum, likeNum, articleNum, btnName  } = this.props;
        return (
            <div className="react-component-card simple">
                <div>
                    <img src={ cover } />
                    <a href="javascript:;" onClick={ this.props.onClick }>
                       <span>{ btnName }</span>
                    </a>
                </div>
                <div>
                    <h4>{ author || '' }</h4>
                    <p>{ desc }</p>
                    <Tips gap="4px">
                        <Tip className="fa fa-eye" tip={ readNum } style={{ fontSize: "12px" }} />
                        <Tip className="fa fa-heart" tip={ likeNum } style={{ fontSize: "12px" }}/>
                        <Tip className="fa fa-file-text-o" tip={ articleNum } style={{ fontSize: "12px" }} />
                    </Tips>
                </div>
            </div>
        );
    }
}

SimpleCard.propTypes = {
    cover:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
    author:PropTypes.string,
    desc:PropTypes.string,
    readNum:PropTypes.string,
    likeNum:PropTypes.string,
    articleNum:PropTypes.string,
    btnName:PropTypes.string
};

export default PseudoClassComponentWrapper(SimpleCard);