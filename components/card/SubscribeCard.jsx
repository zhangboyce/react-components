'use strict';

import React, { Component, PropTypes } from 'react';
import StyleComponentWrapper from '../hoc/StyleComponentWrapper.jsx';
import ClickComponentWrapper from '../hoc/ClickComponentWrapper.jsx';
import HoverComponentWrapper from '../hoc/HoverComponentWrapper.jsx';
import TransitionAnimationComponentWrapper from '../hoc/TransitionAnimationComponentWrapper.jsx';
import { withWrapper } from '../hoc/wrapper.js';

import './card.less';
class SubscribeCard extends Component {

    render() {
        let { TipsComponent, onClick, cover, author, desc } = this.props;
        return (
            <div className="react-component-card subscribe">
                {
                    this.props.children
                }
                <section onClick={ () => { onClick && onClick() } }>
                    <img src={ cover } />
                </section>

                <div onClick={ () => { onClick && onClick() } }>
                    <h4 style={{ cursor: (onClick ? 'pointer' : 'inherit') }}>
                        { author || '' }
                    </h4>

                    <p>{ desc }</p>
                    { TipsComponent }
                </div>
            </div>
        );
    }
}

SubscribeCard.propTypes = {
    cover: PropTypes.string.isRequired,
    TipsComponent: PropTypes.element,
    onClick: PropTypes.func,
    author: PropTypes.string,
    desc: PropTypes.string
};

export default withWrapper(StyleComponentWrapper, ClickComponentWrapper, HoverComponentWrapper, TransitionAnimationComponentWrapper)(SubscribeCard);