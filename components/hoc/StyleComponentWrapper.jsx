'use strict';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { isObject, isString } from '../../common/Utils';

/**
 * a hoc component accept a style prop and add the style to wrapped component.
 * @param ComposedComponent
 * @returns {{}}=wrapped component
 */
export default ComposedComponent => {
    let Wrapped = class extends Component {

        __setStyle__ = props => {
            let $this = $(ReactDOM.findDOMNode(this));
            let style = props.style;
            if (isString(style)) {
                $this.addClass(style.replace('\.', ''));
            } else if (isObject(style)) {
                for (let k in style) {
                    if (Object.prototype.hasOwnProperty.call(style, k)) {
                        $this.css(k, style[k]);
                    }
                }
            }
        };

        componentDidMount() {
            this.__setStyle__(this.props);
        }

        componentWillReceiveProps(nextProps) {
            this.__setStyle__(nextProps);
        }

        render() {
            return (
                <ComposedComponent { ...this.props } />
            );
        }
    };

    Wrapped.propTypes = {
        style: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string
        ])
    };
    return Wrapped;
};
