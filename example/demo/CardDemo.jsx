
import React,{ Component } from 'react';
import Layout from './Layout.jsx';
import DP from './DP.jsx';

import { Card,Cards,SimpleCard,RotateCards } from 'react-components'

export default class CardDemo extends Component {

    handleClick = () => {
        alert('be clicked.');
    };

    render() {
        return (
            <Layout title="卡片">
                <DP title="1. 普通卡片:" code='<Card cover="/public/images/card/002.jpg"
                                  title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                                  desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                                  author="教你学一点说话技巧" />'>
                        <Card cover="/public/images/card/003.jpg"
                              title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                              author="教你学一点说话技巧" />
                </DP>

                <DP title="2. 卡片组:" code='<Cards rowCols={ 3 }>
                                <Card cover="/public/images/card/002.jpg"
                                      title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                                      desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                                      author="教你学一点说话技巧" />
                                <Card cover="/public/images/card/002.jpg"
                                      title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                                      desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                                      author="教你学一点说话技巧" />
                                <Card cover="/public/images/card/002.jpg"
                                      title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                                      desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                                      author="教你学一点说话技巧" />
                                <Card cover="/public/images/card/002.jpg"
                                      title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                                      desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                                      author="教你学一点说话技巧" />
                            </Cards>'>
                    <Cards rowCols={ 3 }>
                        <Card cover="/public/images/card/002.jpg"
                              title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                              author="教你学一点说话技巧" />
                        <Card cover="/public/images/card/002.jpg"
                              title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                              author="教你学一点说话技巧" />
                        <Card cover="/public/images/card/002.jpg"
                              title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                              author="教你学一点说话技巧" />
                        <Card cover="/public/images/card/002.jpg"
                              title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                              author="教你学一点说话技巧" />
                    </Cards>
                </DP>
                <DP title="3. 简单卡片:" code=''>
                    <SimpleCard cover="/public/images/card/001.jpg"
                                author="男人装"
                                desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                                btnName="订阅"
                                readNum="1212"
                                likeNum="987"
                                articleNum="56篇"
                                onClick={ this.handleClick } />
                </DP>
                <DP title="4. 简单卡片组:" code=''>
                    <Cards rowCols={ 4 }>
                        <SimpleCard cover="/public/images/card/003.jpg"
                                    author="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以"
                                    desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                                    btnName="订阅"
                                    readNum="1212"
                                    likeNum="987"
                                    articleNum="56篇"
                                    onClick={ this.handleClick } />
                        <SimpleCard cover="/public/images/card/002.jpg"
                                    author="男人装"
                                    desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                                    btnName="订阅"
                                    readNum="1212"
                                    likeNum="987"
                                    articleNum="56篇"
                                    onClick={ this.handleClick } />
                        <SimpleCard cover="/public/images/card/001.jpg"
                                    author="男人装"
                                    desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                                    btnName="订阅"
                                    readNum="1212"
                                    likeNum="987"
                                    articleNum="56篇"
                                    onClick={ this.handleClick } />
                        <SimpleCard cover="/public/images/card/001.jpg"
                                    author="男人装"
                                    desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                                    btnName="订阅"
                                    readNum="1212"
                                    likeNum="987"
                                    articleNum="56篇"
                                    onClick={ this.handleClick } />
                        <SimpleCard cover="/public/images/card/001.jpg"
                                    author="男人装"
                                    desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                                    btnName="订阅"
                                    readNum="1212"
                                    likeNum="987"
                                    articleNum="56篇"
                                    onClick={ this.handleClick } />
                    </Cards>
                </DP>
            </Layout>
        );
    }
}