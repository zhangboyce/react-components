'use strict';

import React, { Component, PropTypes } from 'react';

export default class Cards extends Component {
    componentDidMount() {
        if (this.props.sum) {
            let $this = $(this.refs._this_);
            let col = Math.floor(12 / this.props.sum);
            $this.find('.react-component-card').removeClass('col-md-4').addClass('col-md-' + col);
        }
    }

    render() {
        return (
            <div ref="_this_" className="react-component-cards row">
                { this.props.children }
            </div>
        );
    }
}

Cards.propTypes = {
    sum:PropTypes.oneOf([1, 2, 3, 4, 6])
};