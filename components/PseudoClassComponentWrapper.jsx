'use strict';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { isObject } from '../common/Utils';

const toString = Object.prototype.toString;
const hasOwnProperty = Object.prototype.hasOwnProperty;

export default ComposedComponent => {
    let Wrapped = class extends Component {

        __handleHover__ = ($this, css) => {
            if (toString.call(css) == '[object Object]') {
                let old = {};
                for (let k in css) {
                    if (hasOwnProperty.call(css, k)) {
                        old[k] = $this.css(k);
                    }
                }
                $this.hover(() => {
                    $this.css(css);
                }, () => {
                    $this.css(old);
                });
            } else if (toString.call(css) == '[object String]') {
                $this.hover(() => {
                    $this.addClass(css);
                }, () => {
                    $this.removeClass(css);
                });
            }
        };

        componentWillUnmount() {
            let $this = $(ReactDOM.findDOMNode(this));
            $this.unbind('hover');
        }

        componentDidMount() {
            let $this = $(ReactDOM.findDOMNode(this));
            let style = this.props.style;
            if (style) {
                for (let k in style) {
                    if (Object.prototype.hasOwnProperty.call(style, k)) {
                        if (k === ':hover') {
                            this.__handleHover__($this, style[k]);
                        } else {
                            $this.css(k, style[k]);
                        }
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

    Object.defineProperty(Wrapped, "name", {
        value: ComposedComponent.name,
        writable: false
    });

    Wrapped.propTypes = {
        style: PropTypes.object
    };

    return Wrapped;
};
