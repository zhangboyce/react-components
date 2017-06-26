'use strict';
import React, { Component, PropTypes } from 'react';
import { isFunction } from '../../common/Utils';

export const compose = (...funcs) => {
    if (funcs.length === 0) {
        return arg => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }

    return funcs.reduce((a, b) => (...args) => a(b(...args)))
};


/**
 * a hoc component accept some hoc components to wrap the component that return function arg.
 * @param wrappers hoc components
 * @returns {{}}=wrapped function accept target component
 */
export const withWrapper =  (... wrappers) => {
    return ComposedComponent => {
        const name = ComposedComponent.name;
        ComposedComponent = compose(...wrappers)(ComposedComponent);

        const Wrapped = class extends Component {
            render() {
                return (
                    <ComposedComponent { ...this.props } />
                );
            }
        };

        const __use__ = wrapper => {
            if (!isFunction(wrapper)) {
                console.warn('wrapper: ' + wrapper +' must be a function.');
                return;
            }

            ComposedComponent = wrapper(ComposedComponent);
            Object.defineProperty(ComposedComponent, "name", {
                value: name,
                writable: false
            });
        };

        Wrapped.use = function (..._wrappers_) {
            if (_wrappers_.length === 0) return;
            if (_wrappers_.length === 1) {
                __use__(_wrappers_[0])
            } else {
                _wrappers_.forEach(wrapper => {
                    __use__(wrapper);
                });
            }
        };

        Object.defineProperty(Wrapped, "name", {
            value: name,
            writable: false
        });
        return Wrapped;
    };
};
