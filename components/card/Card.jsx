'use strict';

import React, { Component, PropTypes } from 'react';
import './card.less';
import StyleComponentWrapper from '../hoc/StyleComponentWrapper.jsx';
import ClickComponentWrapper from '../hoc/ClickComponentWrapper.jsx';
import HoverComponentWrapper from '../hoc/HoverComponentWrapper.jsx';
import TransitionAnimationComponentWrapper from '../hoc/TransitionAnimationComponentWrapper.jsx';
import { withWrapper } from '../hoc/wrapper.js';

class Card extends Component {

    render() {
        let { onClick, cover, TipsComponent, LazyImageComponent, title, author, desc  } = this.props;
        return (
            <div className="react-component-card" onClick={ () => { onClick && onClick() } }>
                {
                    LazyImageComponent && <LazyImageComponent url={ cover } />
                }
                {
                    !LazyImageComponent && <img src={ cover } />
                }
                <div>
                    <h4>
                        { title }
                    </h4>
                    {
                        author &&
                        <div className="author">
                            <span>{ author }</span>
                        </div>
                    }
                    <p>{ desc }</p>
                    { TipsComponent }
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    cover: PropTypes.string.isRequired,
    LazyImageComponent: PropTypes.func,
    TipsComponent: PropTypes.element,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    desc: PropTypes.string,
    onClick: PropTypes.func
};

export default withWrapper(StyleComponentWrapper, ClickComponentWrapper, HoverComponentWrapper, TransitionAnimationComponentWrapper)(Card);


