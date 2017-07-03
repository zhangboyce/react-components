'use strict';
import React, { Component, PropTypes } from 'react';
import StyleComponentWrapper from './StyleComponentWrapper.jsx';
import { isNumber, isString, isObject, isArray, isFunction } from '../../common/Utils';

/**
 *
 * @param ComposedComponent
 * @returns {{}}
 */
export default ComposedComponent => {

    ComposedComponent = StyleComponentWrapper(ComposedComponent);
    let __requestAnimationFrame__ =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;

    let __cancelAnimationFrame__ =
        window.cancelAnimationFrame ||
        window.mozCancelAnimationFrame;
    let request;

    let Wrapped = class extends Component {

        constructor(props) {
            super(props);

            let transitions = [];
            if(props.animated) {
                let transition = props.transition;
                if (!transition || (!isObject(transition) && !isArray(transition))) {
                    transitions.push({
                        property: props.transitionProperty,
                        duration: props.transitionDuration,
                        timingFunction: props.transitionTimingFunction,
                        delay: props.transitionDelay,
                        start: props.transitionStart,
                        end: props.transitionEnd
                    });
                } else {
                    transitions.push(...transition);
                }
            }

            let state = {  };
            for (let i=0; i<transitions.length; i++) {
                state[transitions[i].property] = transitions[i].start;
            }
            state['transitions'] = transitions;
            state['toStart'] = false;

            this.state = state;
        }

        componentWillReceiveProps () {
            if (!this.props.animated) return;

            // to start without animation
            this.resolveAnimationFrame( () => {
                // to end with animation
                request = __requestAnimationFrame__(this.resolveAnimationFrame);
            });
        }

        componentDidMount() {
            if (!this.props.animated) return;
            request = __requestAnimationFrame__(this.resolveAnimationFrame);
        }

        componentWillUnmount() {
            __cancelAnimationFrame__(request);
        }

        resolveAnimationFrame = callback => {
            if (!this.props.animated) return;

            let transitions = this.state.transitions;
            let state = {  };
            for (let i=0; i<transitions.length; i++) {
                if(this.state[transitions[i].property] != transitions[i].end) {
                    state[transitions[i].property] = transitions[i].end;
                    state['toStart'] = false;
                } else {
                    state[transitions[i].property] = transitions[i].start;
                    state['toStart'] = true;
                }
            }
            this.setState(Object.assign({}, this.state, state), () => {
                callback && isFunction(callback) && callback();
            });
        };

        __transition__ = (transitionProperty,
                          transitionDuration,
                          transitionTimingFunction,
                          transitionDelay) => {

            transitionDuration = isNumber(transitionDuration) ? transitionDuration + 'ms': transitionDuration;
            return `${ transitionProperty || '' } ${ transitionDuration || '' } ${ transitionTimingFunction || 'ease-in' } ${ transitionDelay || '' }`;
        };

        __style__ = transition => {
            return {
                transition: transition,
                '-moz-transition': transition,
                '-webkit-transition': transition,
                '-o-transition': transition
            };
        };

        render() {

            let { transitions, toStart } = this.state;
            let style = this.props.style || {};

            if (transitions && transitions.length != 0) {
                let __transitions__ = [];
                for (let i=0; i<transitions.length; i++) {
                    let __transition__ =
                        this.__transition__( transitions[i].property,
                            transitions[i].duration,
                            transitions[i].timingFunction,
                            transitions[i].delay );

                    if (!toStart) __transitions__.push(__transition__);
                    style[transitions[i].property] = this.state[transitions[i].property];
                }
                style = Object.assign({}, style , this.__style__(__transitions__.join(', ')));
            }

            return (
                <ComposedComponent { ...this.props } style={ style } />
            );
        }
    };

    Wrapped.propTypes = {
        transitionStart: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        transitionEnd: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),

        transitionProperty: PropTypes.string,
        transitionDuration: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        transitionTimingFunction: PropTypes.string,
        transitionDelay: PropTypes.string,

        transition: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.arrayOf(PropTypes.object)
        ]),
        animated: PropTypes.bool
    };

    Wrapped.defaultProps = {
        transitionStart: 0,
        transitionEnd: 1,

        transitionProperty: 'opacity',
        transitionDuration: 500,
        transitionTimingFunction: 'ease-in',
        transitionDelay: '',

        animated: false
    };

    return Wrapped;
};
