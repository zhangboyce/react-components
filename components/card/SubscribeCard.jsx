'use strict';

import React, { Component, PropTypes } from 'react';
import PseudoClassComponentWrapper from '../PseudoClassComponentWrapper.jsx';
import './card.less';
import Tips from '../tip/Tips.jsx';
import Tip from '../tip/Tip.jsx';

class SubscribeCard extends Component {

    render() {
        let { onClick, cover, author, desc, readNum, likeNum, articleNum  } = this.props;
        return (
            <div className="react-component-card subscribe">
                {
                    this.props.children
                }
                <section onClick={ () => { onClick && onClick() } }
                         style={{ cursor: (onClick ? 'pointer' : 'inherit') }}>
                    <img src={ cover } />
                </section>

                <div>
                    <h4 onClick={ () => { onClick && onClick() } }
                        style={{ cursor: (onClick ? 'pointer' : 'inherit') }}>
                        { author || '' }
                    </h4>

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

SubscribeCard.propTypes = {
    cover: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    author: PropTypes.string,
    desc: PropTypes.string,
    readNum: PropTypes.number,
    likeNum: PropTypes.number,
    articleNum: PropTypes.number
};

export default PseudoClassComponentWrapper(SubscribeCard);