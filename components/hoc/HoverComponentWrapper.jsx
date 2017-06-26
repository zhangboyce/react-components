'use strict';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { isObject, isString, isFunction } from '../../common/Utils';

/**
 * a hoc component accept a onHover prop and hover style to wrapped component or execute the hover callback.
 * @param ComposedComponent
 * @returns {{}}=wrapped component
 */
export default ComposedComponent => {
    let Wrapped = class extends Component {

        __handleHover__ = ($this, hover) => {
            if (isObject(hover)) {
                let old = {};
                for (let k in hover) {
                    if (Object.prototype.hasOwnProperty.call(hover, k)) {
                        old[k] = $this.css(k);
                    }
                }
                $this.hover(() => {
                    $this.css(hover);
                }, () => {
                    $this.css(old);
                });
            } else if (isString(hover)) {
                let className = hover.replace('\.', '');
                $this.hover(() => {
                    $this.addClass(className);
                }, () => {
                    $this.removeClass(className);
                });
            } else if (isFunction(hover)) {
                $this.hover(() => {
                    hover(this, $this);
                }, () => {
                });
            }
        };

        componentWillUnmount() {
            let $this = $(ReactDOM.findDOMNode(this));
            $this.unbind('hover');
        }

        componentDidMount() {
            let $this = $(ReactDOM.findDOMNode(this));
            let hover = this.props.onHover;
            this.__handleHover__($this, hover);
        }

        render() {
            return (
                <ComposedComponent { ...this.props } />
            );
        }
    };

    Wrapped.propTypes = {
        onHover: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
            PropTypes.func
        ])
    };

    return Wrapped;
};
