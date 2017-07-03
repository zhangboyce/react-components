'use strict';

import React, { Component, PropTypes } from 'react';
import { isArray } from '../../common/Utils';

export default class Tips extends Component {

    render() {
        let { gap, separated, children } = this.props;
        children = isArray(children) ? children : [ children ];

        let newChildren = [];
        children.forEach((child, index) => {
            newChildren.push(React.cloneElement(child, {
                key: index,
                style: Object.assign({}, child.props.style || {}, { marginLeft: gap, marginRight: gap })
            }));
            if (separated && index != children.length - 1) {

                newChildren.push(<span style={{ width: 0, height: '10px', borderRight: '1px solid #ccc' }} />);
            }
        });

        return (
            <div className="react-component-tips">
                { newChildren }
            </div>
        );
    }
}

Tips.propTypes = {
    gap: PropTypes.string,
    separated: PropTypes.bool
};

Tips.defaultProps = {
    gap: '10px'
};