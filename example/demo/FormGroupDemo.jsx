import React, { PropTypes, Component } from 'react';

import  { RowInput, FormGroup }  from 'react-components';
import Layout from '../Layout.jsx';

export default class FormGroupDemo extends Component {

    render() {
        return (
            <Layout title="表单组">
                <FormGroup>
                    <RowInput ref="name" name="name" isRequired label="姓名" />
                    <RowInput ref="password" name="password" type="password" isRequired isPassword label="密码"/>
                    <RowInput ref="age" name="age" isRequired  validateRegex="^\d+$" label="年龄"/>
                    <RowInput ref="email" name="email" isRequired isEmail label="邮箱地址"/>
                </FormGroup>
            </Layout>
        );
    }
}