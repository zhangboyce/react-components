import React, { PropTypes, Component } from 'react';

import  { Tag,Tags }  from 'react-components';
import Layout from './Layout.jsx';
import DP from './DP.jsx';

export default class TagDemo extends Component {

    render() {
        return (
            <Layout title="标签">
                <DP title="1. 普通标签:" code='<Tag name="绿茶" /><Tag name="红茶" /><Tag name="Coco" />'>
                    <Tag name="绿茶" />
                    <Tag name="红茶" />
                    <Tag name="Coco" />
                </DP>

                <DP title="2. 带onclick标签:" code='<Tag name="CCE" onClick= { name => {  alert(name) } } />'>
                    <Tag name="CCE" onClick= { name => {  alert(name) } } />
                </DP>

                <DP title="3. 标签组:" code='<Tags names={ [ "绿茶", "红茶", "Coco" ] } onClick= { name => {  alert(name) } } />'>
                    <Tags names={ [ "绿茶", "红茶", "Coco" ] } onClick= { name => {  alert(name) } } />
                </DP>

                <DP title="4. arrow 标签:" code='<Tag name="红茶" type="arrow" />'>
                    <Tag name="红茶" type="arrow" />
                </DP>

                <DP title="5. arrow 标签组:" code='<Tags type="arrow" names={ [ "绿茶", "红茶", "Coco" ] } onClick= { name => {  alert(name) } } />'>
                    <Tags type="arrow" names={ [ "绿茶", "红茶", "Coco" ] } onClick= { name => {  alert(name) } } />
                </DP>

            </Layout>
        );
    }
}