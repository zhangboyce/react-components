'use strict';

import React, { Component, PropTypes } from 'react';
import PseudoClassComponentWrapper from '../PseudoClassComponentWrapper.jsx';
import './card.less';
import Tips from '../tip/Tips.jsx';
import Tip from '../tip/Tip.jsx';

class SubscribeCard extends Component {
    constructor(props) {
        super(props);
        this.state = { isClick: false }
    }

    handleOnClick = () => {
        this.setState({ isClick:!this.state.isClick });
        return this.props.onClick();
    };

    render() {
        let { cover, author, desc, readNum, likeNum, articleNum  } = this.props;
        return (
            <div className="react-component-card subscribe">
                {
                    !this.state.isClick && <a href="javascript:;" onClick={ this.handleOnClick }><span>订阅</span></a>
                }
                {
                    this.state.isClick && <a href="javascript:;" onClick={ this.handleOnClick } style={{ color:'#808080',border:'1px solid #808080' }}><span>取消订阅</span></a>
                }
                <section>
                    <img src={ cover } />
                </section>

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

SubscribeCard.propTypes = {
    cover:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
    author:PropTypes.string,
    desc:PropTypes.string,
    readNum:PropTypes.string,
    likeNum:PropTypes.string,
    articleNum:PropTypes.string
};

export default PseudoClassComponentWrapper(SubscribeCard);