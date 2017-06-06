import React, { PropTypes, Component } from 'react';

import  { Search }  from 'react-components';
import Layout from '../Layout.jsx';

export default class SearchDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword : ''
        }
    }

    handleChange = (keyword) => {
        this.setState({ keyword: keyword })
    }

    handleSearch = () => {

    }


    render() {
        return (
            <Layout title="搜索">
                <p>
                    <span>普通搜索:</span>
                    <div className="bs-example" data-example-id="simple-pre">
                        <div >
                           <Search keyword={ this.state.keyword }
                                   onChange={ this.handleChange }
                                   onSearch={ this.handleSearch } />
                        </div>
                        <pre> { '<div>' +
                                '<Search keyword={ this.state.keyword } onChange={ this.handleChange } onSearch={ this.handleSearch }/>'+
                                '</div>' }
                        </pre>
                    </div>
                </p>
            </Layout>
        );
    }
}