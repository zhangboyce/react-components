'use strict';
import React, { Component, PropTypes } from 'react';
import StyleComponentWrapper from './StyleComponentWrapper.jsx';

/**
 * a hoc component accept a onClick prop and a style with 'cursor' css.
 * @param ComposedComponent
 * @returns {{}}=wrapped component
 */
export default ComposedComponent => {

    ComposedComponent = StyleComponentWrapper(ComposedComponent);
    let Wrapped = class extends Component {
        render() {
            let onClick = this.props.onClick;
            let style = Object.assign({}, this.props.style || {}, { cursor: (onClick ? 'pointer' : 'inherit') });
            return (
                <ComposedComponent { ...this.props } style={ style } />
            );
        }
    };

    Wrapped.propTypes = {
        onClick: PropTypes.func
    };

    return Wrapped;
};
