'use strict';
import React, { Component, PropTypes } from 'react';
import './search.css';

export default class Tag extends Component {
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        let keyword = e.target.value && e.target.value.trim();
        this.props.onChange(keyword);
    }

    handleClear() {
        this.props.onChange('', this.props.onSearch);
    }

    handleKeyUp(e) {
        if (e.keyCode == 13) {
            this.props.onSearch();
        }
    }

    render() {
        return (
            <div className="react-component-search">
                {
                    this.props.keyword &&
                    <i className="fa fa-times" onClick={ this.handleClear.bind(this) }/>
                }
                {
                    !this.props.keyword &&
                    <i className="fa fa-search"/>
                }

                <input type="text" className="form-control" value={this.props.keyword} onChange={ this.handleChange.bind(this) } onKeyUp={ this.handleKeyUp.bind(this) } />
            </div>
        );
    }
};

Tag.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func
};