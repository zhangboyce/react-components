import React,{ Component } from 'react';
import Layout from './../Layout.jsx';
import DP from './DP.jsx';
import { Card, Cards, SubscribeCard } from 'react-components';

export default class CardDemo extends Component {
    render() {
        return (
            <Layout title="CardDemo">
                <DP title="1. 普通卡片:">
                    <Cards marginLeftRight={ 0.8 }>
                        <Card cover="/public/images/card/006.jpg"
                              title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc=""
                              author="教你学一点说话技巧" />
                        <Card cover="/public/images/card/005.jpg"
                              onHover={{ 'border': '2px dashed red' }}
                              title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc=""
                              author="教你学一点说话技巧" />
                        <Card cover="/public/images/card/005.jpg"
                              onClick={() => { alert('be clicked.') }}
                              title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc=""
                              author="教你学一点说话技巧" />

                        <Card cover="/public/images/card/005.jpg"
                              style={{ border: '4px solid darkolivegreen' }}
                              title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc=""
                              author="教你学一点说话技巧" />
                    </Cards>
                </DP>
                
                <DP title="2. 卡片组:">
                    <Cards marginLeftRight={ 0.8 }>
                        <Card cover="/public/images/card/002.jpg"
                              title="1男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                              author="教你学一点说话技巧"
                               />
                        <Card cover="/public/images/card/002.jpg"
                              title="2男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                              author="教你学一点说话技巧" />
                        <Card cover="/public/images/card/002.jpg"
                              title="3男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                              author="教你学一点说话技巧"
                             />
                        <Card cover="/public/images/card/002.jpg"
                              title="4男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                              author="教你学一点说话技巧" />
                    </Cards>
                </DP>

                <DP title="3. 订阅卡片:">
                    <Cards>
                        <SubscribeCard cover="/public/images/card/001.jpg"
                                       author="男人装男人装男人装男人装男人装男人装男人装"
                                       desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                                       onClick={ () => { alert('be clicked.'); } } >
                            <a href="javascript:;" onClick={ () => { alert('订阅'); } }><span>订阅</span></a>
                        </SubscribeCard>
                        <SubscribeCard cover="/public/images/card/001.jpg"
                                       author="男人装男人装男人装男人装男人装男人装男人装"
                                       desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                                       onClick={ () => { alert('be clicked.'); } } >

                            <a href="javascript:;" onClick={ () => { alert('取消订阅'); } } style={{ color:'#808080',border:'1px solid #808080' }}><span>取消订阅</span></a>
                        </SubscribeCard>
                    </Cards>
                </DP>
            </Layout>
        );
    }
}