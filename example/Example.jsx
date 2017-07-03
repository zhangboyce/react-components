import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './public/css/main.less';
import * as demos from './demo';

let routers = [];
let i = 0;
for (let k in demos) {
        if (Object.prototype.hasOwnProperty.call(demos, k)) {
                let comp = demos[k];
                if (i == 0) routers.push(<Route key={ k + 'root' } path="/" component={ comp } />);
                routers.push(<Route key={ k } path={ k.replace('Demo', '').toLowerCase() } component={ comp }/>);
        }
        i ++;
}

ReactDOM.render(
    <Router history={ browserHistory }>
            { routers }
    </Router>, document.getElementById('main'));