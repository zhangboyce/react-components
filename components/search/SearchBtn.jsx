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
                <div className="col-sm-9">
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
                <a href="#" onClick={  }>帐号搜索</a>
                <a href="#">文章搜索</a>

            </div>
        );
    }
};

Tag.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func
};