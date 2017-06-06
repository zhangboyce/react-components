import React, { PropTypes, Component } from 'react';

import  { Tag,Tags }  from 'react-components';
import Layout from '../Layout.jsx';

export default class TagDemo extends Component {

    render() {
        return (
            <Layout title="标签">
                <p>
                    <span>1. 普通标签:</span>
                    <div className="bs-example" data-example-id="simple-pre">
                        <div style={ { border: '1px dashed rgb(196, 196, 196)' } }>
                            <Tag name="绿茶" />
                            <Tag name="红茶" />
                            <Tag name="可口可乐" />
                            <Tag name="雪碧" />
                        </div>
                        <pre> { '<div >'
                                + '<Tag name="绿茶" />'
                                + '<Tag name="红茶" />'
                                + '<Tag name="可口可乐" />'
                                + '<Tag name="雪碧" />'
                             + '</div>' }
                        </pre>
                    </div>
                </p>
                <p>
                    <span>2. 带onclick标签:</span>
                    <div className="bs-example" data-example-id="simple-pre">
                        <Tag name="CCE" onClick= { name => {  alert(name) } } />
                        <pre> { ' <Tag name="CCE" onClick= \{ name => \{  alert(name) \} \} />' } </pre>
                    </div>
                </p>

                <p>
                    <span>3. 标签组:</span>
                    <div className="bs-example" data-example-id="simple-pre">
                        <Tags names={ [ '绿茶', '红茶', '可口可乐' ] } onClick= { name => {  alert(name) } } />
                        <pre> { "<Tags names={ [ '绿茶', '红茶', '可口可乐' ] } onClick= { name => {  alert(name) } } />" } </pre>
                    </div>
                </p>
            </Layout>
        );
    }
}