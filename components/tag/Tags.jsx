'use strict';
import React, { Component, PropTypes } from 'react';
import Tag from './Tag.jsx';
import './tag.css';

export default class Tags extends Component {
    render() {
        let { names, onClick } = this.props;

        return (
            <div className="react-component-tags" >
                {
                    names.map(name => {
                        return <Tag key={ name } name={ name } onClick={ onClick } />
                    })
                }
            </div>
        );
    }
};

Tag.propTypes = {
    names: PropTypes.array.isRequired,
    onClick: PropTypes.func
};