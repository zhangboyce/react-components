import React, { PropTypes, Component } from 'react';

import  { SearchInput }  from 'react-components';
import Layout from '../Layout.jsx';

export default class SearchInputDemo extends Component {

    render() {
        return (
            <Layout title="搜索框">
                <p>
                    <span>1. 普通搜索框:</span>
                    <div className="bs-example" data-example-id="simple-pre">
                        <div style={ { border: '1px dashed rgb(196, 196, 196)' } }>
                            <SearchInput onSearch={ keyword => { alert(keyword) } } />
                        </div>
                        <pre> { '<SearchInput onSearch={ keyword => { alert(keyword) } } />' } </pre>
                    </div>
                </p>
                <p>
                    <span>2. 可以监听onChange事件:</span>
                    <div className="bs-example" data-example-id="simple-pre">
                        <div style={ { border: '1px dashed rgb(196, 196, 196)' } }>
                            <SearchInput placeholder="可以监听onChange事件" onChange={ keyword => { document.getElementById('msg').innerHTML = keyword; } } />
                        </div>
                        <div id="msg" style={{ height: '30px',lineHeight:'30px',padding:'4px 22px' }}></div>
                        <pre> { '<SearchInput onSearch={ keyword => { document.getElementById("msg").innerHTML = keyword; } } />' } </pre>
                    </div>
                </p>
            </Layout>
        );
    }
}