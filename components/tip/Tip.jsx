'use strict';

import React, { Component, PropTypes } from 'react';
import StyleComponentWrapper from '../hoc/StyleComponentWrapper.jsx';
import ClickComponentWrapper from '../hoc/ClickComponentWrapper.jsx';
import HoverComponentWrapper from '../hoc/HoverComponentWrapper.jsx';
import { withWrapper } from '../hoc/wrapper.js';

import { isString, isNumber, isBoolean, isObject, isArray, isFunction  } from '../../common/Utils';
import './tip.less';

const suffix = {
    'h': 100,
    'k': 1000,
    'm': 1000000,
    'b': 1000000000
};

class Tip extends Component {

    __handleNumberTip__ = number => {
        let { overflowCount, overflowSuffix, overflowSuffixUpperCase } = this.props;
        if (overflowSuffix === '' || overflowSuffix === null || overflowSuffix == undefined) return number;
        if (overflowSuffix === '+') return number > overflowCount ? number + '+': number;
        else {
            let suf = suffix[overflowSuffix];
            return number > overflowCount ? Math.floor((number / suf)) + `${ overflowSuffixUpperCase ? overflowSuffix.toUpperCase(): overflowSuffix }+` : number;
        }
    };

    render() {
        let { className, tip, defaultTip, alwaysShow } = this.props;
        let show = alwaysShow || (tip != null && tip != undefined && tip != '');
        tip = show ? (isString(tip) ? tip : isNumber(tip) ? this.__handleNumberTip__(tip) : tip): '';
        let showTip = show ? (tip || defaultTip): '';
        return (
            <span className="react-component-tip">
                { show && <i className={ className }>&nbsp;&nbsp;{ showTip }</i> }
            </span>
        );
    }
}

Tip.ropTypes = {
    className: PropTypes.string,
    tip: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    defaultTip: PropTypes.string,
    alwaysShow: PropTypes.bool,
    overflowSuffix: PropTypes.oneOf(['+', 'h', 'k', 'm', 'b']),
    overflowSuffixUpperCase: PropTypes.bool,
    overflowCount: PropTypes.number
};

Tip.defaultProps = {
    overflowCount: 9999,
    overflowSuffix: 'k',
    defaultTip: '-'
};

export default withWrapper(StyleComponentWrapper, ClickComponentWrapper, HoverComponentWrapper)(Tip);