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

        componentDidMount() {
            let $this = $(ReactDOM.findDOMNode(this));
            let style = this.props.style;
            if (isString(style)) {
                $this.addClass(style.replace('\.', ''));
            } else if (isObject(style)) {
                for (let k in style) {
                    if (Object.prototype.hasOwnProperty.call(style, k)) {
                        $this.css(k, style[k]);
                    }
                }
            }
        }

        componentWillReceiveProps(nextProps) {
            let $this = $(ReactDOM.findDOMNode(this));
            let style = nextProps.style;
            if (isString(style)) {
                $this.addClass(style.replace('\.', ''));
            } else if (isObject(style)) {
                for (let k in style) {
                    if (Object.prototype.hasOwnProperty.call(style, k)) {
                        $this.css(k, style[k]);
                    }
                }
            }
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
