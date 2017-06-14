'use strict';

import React, { Component, PropTypes } from 'react';
import Slider from './Slider.jsx';

import '../../public/vendor/unslider/dist/js/unslider-min.js';
import '../../public/vendor/unslider/dist/css/unslider.css';
import '../../public/vendor/unslider/dist/css/unslider-dots.css';
import './slider.less';

const defaultSlider = {
    autoplay: true,
    fluid: true,
    dots: true,
    delay: 5000,
    speed: 1000,
    arrows: {
        prev: '<a class="unslider-arrow prev"><i class="fa fa-chevron-left fa-2x" /></a>',
        next: '<a class="unslider-arrow next"><i class="fa fa-chevron-right fa-2x" /></a>'
    }
};

export default class Sliders extends Component {

    __set__ = (name, value) => {
        if (value != undefined && value != '' && value.trim() != '') {
            $('#' + this.props.id).parent('.unslider').css(name, value);
        }
    };

    componentDidMount() {
        let slider = { ...defaultSlider, ...this.props.slider };
        $('#' + this.props.id).unslider(slider);
        let { width, height } = this.props;
        this.__set__('width', width);
        this.__set__('height', height);
    }

    render() {
        return (
            <div id={ this.props.id } className="react-component-sliders">
                <ul>{ this.props.children }</ul>
            </div>
        );
    }
};

Sliders.propTypes = {
    id: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    slider: PropTypes.object
};