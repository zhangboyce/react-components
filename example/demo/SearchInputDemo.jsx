import React, { PropTypes, Component } from 'react';

import  { SearchInput }  from 'react-components';
import Layout from './Layout.jsx';

export default class SearchInputDemo extends Component {

    render() {
        return (
            <Layout title="搜索框">
                <p>
                    <span>1. 普通搜索:</span>
                    <div className="bs-example" data-example-id="simple-pre">
                        <div style={ { border: '1px dashed rgb(196, 196, 196)' } }>
                            <SearchInput onSearch={ keyword => { alert(keyword) } } />
                        </div>
                        <pre> { '<SearchInput onSearch={ keyword => { alert(keyword) } } />' } </pre>
                    </div>
                </p>
            </Layout>
        );
    }
}