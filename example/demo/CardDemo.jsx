import React,{ Component } from 'react';
import Layout from './../Layout.jsx';
import DP from './DP.jsx';
import { Card, Cards, SubscribeCard } from 'react-components';

export default class CardDemo extends Component {

    constructor(props) {
        super(props);
        this.state = { cards: [
            {
                cover:"/public/images/card/006.jpg",
                title:"男人7种行为等同于说“我爱你”！你看懂了吗？",
                desc:"",
                author:"教你学一点说话技巧"
            }
        ] };
    }

    dianwo = () => {
        this.setState({ cards: [
            {
                cover:"/public/images/card/005.jpg",
                title:"男人7种行为等同于说“我爱你”！你看懂了吗？",
                desc:"",
                author:"教你学一点说话技巧"
            }
        ]  });
    };

    dianta = () => {
        this.setState({ cards: [
            {
                cover:"/public/images/card/001.jpg",
                title:"男人7种行为等同于说“我爱你”！你看懂了吗？",
                desc:"",
                author:"教你学一点说话技巧"
            }
        ]  });
    };

    render() {
        return (
            <Layout title="CardDemo">
                <DP title="-1. 动画卡片:">
                    <a href="javascript:;" onClick={  this.dianwo  }>点我</a><br/>
                    <a href="javascript:;" onClick={  this.dianta  }>点他</a><br/>
                    <Cards marginLeftRight={ 0.8 }>
                        {
                            this.state.cards.map(card => {
                                return (
                                    <Card cover={card.cover}
                                          title={card.title}
                                          author={card.author}
                                          animated
                                    />
                                );
                            })
                        }
                    </Cards>
                </DP>


            </Layout>
        );
    }
}