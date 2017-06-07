'use strict';
import React, { Component, PropTypes } from 'react';
import './tag.less';

const TYPE_COMMON = 'common';
const TYPE_ARROW = 'arrow';

export default class Tag extends Component {

    constructor(props) {
        super(props);
        this.state = { selected: false };
    }

    handleOnClick = name => {
        return () => {
            this.setState({ selected: !this.state.selected });
            this.props.onClick && this.props.onClick(name);
        };
    };

    __classname__ = () => {
        let classes = [];
        let type = this.props.type || TYPE_COMMON;
        if (type === TYPE_COMMON) classes.push('react-component-tag');
        if (type === TYPE_ARROW) classes.push('react-component-arrow-tag');
        if (this.state.selected) classes.push('selected');

        return classes.join(' ').trim();
    };

    render() {
        return (
            <span className={ this.__classname__() }
                  onClick={ this.handleOnClick(this.props.name) } >
                { this.props.name }
            </span>
        );
    }
};

Tag.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([TYPE_COMMON, TYPE_ARROW]),
    onClick: PropTypes.func
};