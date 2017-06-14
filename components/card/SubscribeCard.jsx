'use strict';

import React, { Component, PropTypes } from 'react';
import './card.less';

export default class SubscribeCard extends Component {
    constructor(props) {
        super(props);
        this.state = { isClick: false }
    }

    handleOnClick = () => {
        this.setState({ isClick:!this.state.isClick });
        return this.props.onClick();
    }

    render() {
        let { style, cover, author, desc, readNum, likeNum, articleNum  } = this.props;
        return (
            <div style={ style } className="react-component-card subscribe">
                {
                    !this.state.isClick && <a href="javascript:;" onClick={ this.handleOnClick }><span>订阅</span></a>
                }
                {
                    this.state.isClick && <a href="javascript:;" onClick={ this.handleOnClick } style={{ color:'#808080',border:'1px solid #808080' }}><span>取消订阅</span></a>
                }
                <img src={ cover } />
                <div>
                    <h4>{ author || '' }</h4>
                    <p>{ desc }</p>
                    <div>
                        <span className="fa fa-eye">&nbsp;<i>{ readNum || '-' }</i></span>
                        <span className="fa fa-heart">&nbsp;<i>{ likeNum || '-' }</i></span>
                        <span className="fa fa-file-text-o">&nbsp;<i>{ articleNum || '-' }</i></span>
                    </div>
                </div>
            </div>
        );
    }
}

SubscribeCard.propTypes = {
    cover:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
    style:PropTypes.object,
    author:PropTypes.string,
    desc:PropTypes.string,
    readNum:PropTypes.string,
    likeNum:PropTypes.string,
    articleNum:PropTypes.string
};