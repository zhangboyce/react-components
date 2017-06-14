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
    };

    handleFilter = (num) => {
        return num = num >= 1000 ? (num / 1000).toFixed(1) + 'k+' : num;
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
                <img src={ cover } />
                <div>
                    <h4>{ author || '' }</h4>
                    <p>{ desc }</p>
                    <div>
                        <span className="fa fa-eye">&nbsp;<i>{ this.handleFilter(readNum) || '-' }</i></span>
                        <span className="fa fa-heart">&nbsp;<i>{ this.handleFilter(likeNum) || '-' }</i></span>
                        <span className="fa fa-file-text-o">&nbsp;<i>{ this.handleFilter(articleNum) || '-' }</i></span>
                    </div>
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