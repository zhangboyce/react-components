'use strict';

import React, { Component, PropTypes } from 'react';

export default class SliderBanner extends Component {

    componentDidMount() {
        $('.banner').unslider({
            autoplay: true,
            delay: 5000,
            arrows: {
                prev: '<a class="unslider-arrow prev"><i class="fa fa-chevron-left fa-2x" /></a>',
                next: '<a class="unslider-arrow next"><i class="fa fa-chevron-right fa-2x" /></a>'
            }
        });
    }

    render() {
        let banners = this.props.banners;
        return (
            <div className="banner">
                <ul>
                    {
                        _.map(banners, banner =>{
                            return <li key={ banner }><img src={ banner }/></li>
                        })
                    }
                </ul>
            </div>
        );
    }
};