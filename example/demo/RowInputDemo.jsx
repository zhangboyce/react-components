import React, { PropTypes, Component } from 'react';

import  { RowInput }  from 'react-components';
import Layout from './../Layout.jsx';
import DP from './DP.jsx';

export default class RowInputDemo extends Component {
    render() {
        return (
            <Layout title="RowInputDemo">
                <DP title="1. 默认输入框:">
                    <RowInput name="n1" />
                </DP>

                <DP title="2. 设置输入框的ref属性。通过this.props.refs获取输入框的值:">
                    <RowInput name="n2" ref="n2" placeholder="设置输入框的ref属性" />
                    <button type="button" onClick={ ()=> { alert(this.refs.n2.val) } }>获取值</button>
                </DP>

                <DP title="3. 添加label, 并设置labelClassName和inputClassName, 默认为bootstrap的预定义类:">
                    <RowInput name="n3" label="姓名:" inputClassName="col-sm-6" />
                </DP>

                <DP title="4. isRequired 必填字段:">
                    <RowInput name="n4" isRequired placeholder="必填字段"/>
                </DP>

                <DP title="5. isRequired 必填字段, 并且格式必须是email:">
                    <RowInput name="n5" isRequired isEmail placeholder="必填字段, 并且格式必须是email"/>
                </DP>

                <DP title="6. 非必填字段, 但是如果有值,格式必须是password:">
                    <RowInput name="n6" type="password" isPassword />
                </DP>

                <DP title="7. 字段值必须equals指定的值:">
                    <RowInput name="n7" isEquals="1234" validateMsg="值必须等于1234" />
                </DP>

                <DP title="8. 自定义验证错误的消息:">
                    <RowInput name="n8" isRequired isUrl validateMsg="这并不是一个url" />
                </DP>

                <DP title="9. 自定义验证正则表达式:">
                    <RowInput name="n9" isRequired validateRegex="^\d+$" validateMsg="不满足正则表达式'^\d+$'" />
                </DP>

                <DP title="10. 忽略input的onbulr事件执行校验检查:">
                    <RowInput name="n10" isRequired isEmail ignoreValidate />
                </DP>

                <DP title="11. 绑定input的onChange事件,onBlur事件。">
                    <RowInput name="n11" isRequired onBlur={ e => { alert(e.target.value) } } onChange={ e => { console.log(e.target.value) } }/>
                </DP>

            </Layout>
        );
    }
}