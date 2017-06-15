'use strict';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const toString = Object.prototype.toString;
const hasOwnProperty = Object.prototype.hasOwnProperty;

export default ComposedComponent => {

    let Wrapped = class extends Component {
        __handleHover__ = css => {
            let $this = $(ReactDOM.findDOMNode(this));
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

        componentDidMount() {
            let style = this.props.style;
            if (style && style[':hover']) {
                let css = style[':hover'];
                this.__handleHover__(css);
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            );
        }
    };

    Object.defineProperty(Wrapped, "name", {
        value: ComposedComponent.name,
        writable: false
    });

    return Wrapped;
};
