'use strict';

import React, { Component, PropTypes } from 'react';
import { isArray } from '../../common/Utils';

export default class Cards extends Component {

    render() {
        let rowCols = this.props.rowCols;
        let marginLeftRight = this.props.marginLeftRight;
        let marginTopBottom = this.props.marginTopBottom;

        let sum_margin = rowCols * 2 * marginLeftRight;
        let width = ((100-sum_margin) / rowCols) + '%';
        let margin = `${marginTopBottom} ${ marginLeftRight }%`;

        let children = this.props.children;
        children = isArray(children) ? children : [ children ];
        children = children.map((child, index) => React.cloneElement(child, {
            key: index,
            style: Object.assign({}, child.props.style || {},  { width: width, margin: margin })
        }));

        return (
            <div className="react-component-cards">
                { children }
            </div>
        );
    }
}

Cards.propTypes = {
    marginTopBottom: PropTypes.string,
    marginLeftRight: PropTypes.number,
    rowCols:PropTypes.oneOf([1, 2, 3, 4, 5, 6])
};

Cards.defaultProps = {
    rowCols: 3,
    marginTopBottom: '10px',
    marginLeftRight: 0.5
};