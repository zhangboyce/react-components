import React, { PropTypes, Component } from 'react';
import  { Slider, Sliders }  from 'react-components';
import Layout from './Layout.jsx';
import DP from './DP.jsx';

export default class SliderBannerDemo extends Component {

    render() {
        let images = [
            '../public/images/banners/商务合作.png',
            '../public/images/banners/广告招商.png',
            '../public/images/banners/我的关注.png',
            '../public/images/banners/版权购买.png'
        ];
        return (
            <Layout title="轮播Slider">
                <DP title="1. 默认轮播Slider:">
                    <Sliders id="slider_1">
                        <Slider image={ images[2] } >
                            <div>
                                <h3>可口可乐喊你去听音乐节</h3>
                                <div>在罗马尼亚可口可乐公司发现年轻人不爱喝可乐了，但是大部分年轻人都爱去音乐节，于是他们推出这款特别的音乐节可乐，包装上有一圈细条可以撕下来当腕带使用。</div>
                            </div>
                        </Slider>
                    </Sliders>
                </DP>

                <DP title="2. 带onClick的Slider:">
                    <Sliders id="slider_2" slider={{ arrows: {}}} >
                        <Slider image={ images[1] } onClick={ () => { alert(images[0]); } } />
                        <Slider image={ images[2] } />
                        <Slider image={ images[3] } />
                    </Sliders>
                </DP>

                <DP title="3. 自定义宽度和高度的SliderBanner:">
                    <Sliders id="slider_3" width="900px" height="400px">
                        <Slider image={ images[2] } />
                        <Slider image={ images[3] } />
                    </Sliders>
                </DP>

            </Layout>
        );
    }
}