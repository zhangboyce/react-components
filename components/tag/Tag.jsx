'use strict';
import React, { Component, PropTypes } from 'react';
import './tag.css';

export default class Tag extends Component {
    constructor(props) {
        super(props);
    }

    handleOnClick = name => {
        return () => {
            this.props.onClick(name);
        };
    };

    render() {
        return (
            <span className="react-component-tag" onClick={ this.handleOnClick(this.props.name) } >
                { '# ' + this.props.name }
            </span>
        );
    }
};

Tag.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func
};