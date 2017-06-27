'use strict';

import React, { Component, PropTypes } from 'react';
import '../../public/vendor/swiper/dist/css/swiper.min.css';
import '../../public/vendor/swiper/dist/js/swiper.min.js';

import './swiper.css'

export default class Swipers extends Component {

    componentDidMount() {

        new Swiper ('.swiper-container', {
            loop: true,
            speed: 1000,
            autoplay: 1000,


            // 如果需要分页器
            pagination: '.swiper-pagination',
            paginationClickable: true,

            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        })
    }

    render() {
        return (
            <div className="swiper-container swiper-container-horizontal">
                <div className="swiper-wrapper">
                    <div className="swiper-slide red-slide">Slide 1</div>
                    <div className="swiper-slide yellow-slide">Slide 2</div>
                    <div className="swiper-slide blue-slide">Slide 3</div>
                </div>

                <div className="swiper-pagination swiper-pagination-bullets">
                    <div className="swiper-pagination-bullet"></div>
                    <div className="swiper-pagination-bullet"></div>
                    <div className="swiper-pagination-bullet"></div>
                </div>

                <div className=".swiper-button-next"></div>
                <div className=".swiper-button-prev"></div>
            </div>
        )
    }
}