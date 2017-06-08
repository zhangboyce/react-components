
import React,{ Component } from 'react';
import Layout from './Layout.jsx';
import DP from './DP.jsx';

import { Card,Cards } from 'react-components'

export default class CardDemo extends Component {
    render() {
        return (
            <Layout title="卡片">
                <DP title="1. 普通卡片:" code='<Card cover="/public/images/card/002.jpg"
                                  title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                                  desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                                  author="教你学一点说话技巧" />'>
                        <Card cover="/public/images/card/002.jpg"
                              title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                              author="教你学一点说话技巧" />
                </DP>


            </Layout>
        );
    }
}