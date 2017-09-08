'use strict';

import React, { Component, PropTypes } from 'react';
import { isArray } from '../../common/Utils';
import { mq, isPC, isMobile } from '../../common/Navigator';
import './card.less';

const ROWCOLS_AUTO = 'auto';

export default class Cards extends Component {

    constructor(props) {
        super(props);

        this.state = { isPC: isPC };
    }

    componentDidMount() {
        let rowCols = this.props.rowCols;
        if (rowCols == ROWCOLS_AUTO) {
            mq.addListener(mq => {
                this.setState({ isPC: mq.matches });
            });
        }
    }

    render() {
        let rowCols = this.props.rowCols;
        let marginLeftRight = this.props.marginLeftRight;
        let marginTopBottom = this.props.marginTopBottom;

        rowCols = rowCols == ROWCOLS_AUTO ? this.state.isPC ? 3: 1: rowCols;

        let sum_margin = rowCols * 2 * marginLeftRight;
        let width = ((100-sum_margin) / rowCols) + '%';
        let margin = `${marginTopBottom} ${ marginLeftRight }%`;

        let children = this.props && this.props.children || [];
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
    rowCols:PropTypes.oneOf([1, 2, 3, 4, 5, 6, ROWCOLS_AUTO])
};

Cards.defaultProps = {
    rowCols: 3,
    marginTopBottom: '10px',
    marginLeftRight: 0.5
};