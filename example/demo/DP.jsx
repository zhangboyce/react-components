import React, { Component } from 'react';

const blank = "  ";
const new_line = "\r\n";
let clipboard;

import { isString, isNumber, isBoolean, isObject, isArray, isFunction  } from '../../common/Utils';

export default class DP extends Component {

    __toString__ = v => {
        if (isString(v)) return `"${v}"`;
        if (isNumber(v)) return `{ ${v} }`;
        if (isBoolean(v)) return "";
        if (isObject(v)) {
            let result = '{ ';
            for (let k in v) {
                result += `${k}: ${ this.__toString__(v[k]) }, `;
            }
            return  '{' +  result.substring(0, result.length -2) + ' }}';
        }
        if (isArray(v)) return '[' + v.map(it => this.__toString__(it)).toString() + ']';
        if (isFunction(v)) {
            let func = v.toString();
            let body = func.substring(func.indexOf("{") + 1, func.lastIndexOf("}")).replace(/\n/g, '').replace(/\r\n/g, '').trim();
            return `{ () => { ${ body } } }`;
        }
    };

    jsxToString = (children, level = 0) => {
        if (isArray(children)) {
            let result = '';
            children.forEach((child, i) => {
                if (i !=0) result += new_line;
                result += this.jsxToString(child, level + 1);
            });
            return result;

        } else if(isObject(children)) {
            let child = children;
            let name =  isString(child.type) ? child.type : child.type.name;
            let ref = child.ref;
            let props = Object.assign({}, child.props);
            props.ref = ref;

            let p_children = props.children;
            delete props.children;

            let t1 = blank.repeat(level);
            let t2 = blank.repeat(level+2);
            let component = `${t1}<${ name } `;
            let i = 0;
            for (let k in props) {
                let v = props[k];
                if (v != null && v != undefined) {
                    if (i != 0) component += `${new_line}${t2}`;
                    i ++ ;

                    let vs = this.__toString__(v);
                    if (vs != "") component += `${k}=${vs}`;
                    else component += `${k}`;
                }
            }
            if (!p_children) {
                return component + ' />';
            } else {
                let content = this.jsxToString(p_children, level + 1);
                return `${ component }>${new_line}${ content }${new_line}${t1}</${name}>`;
            }
        } else if (isString(children)){
            return blank.repeat(level) + children;
        }
    };

    componentDidMount = () => {
        clipboard = new Clipboard('.btn-clipboard');
    };

    componentWillUnmount = () => {
        clipboard && clipboard.destroy();
    };

    render () {
        let code = this.jsxToString(this.props.children);
        return (
            <div style={ { "marginBottom": '50px' } }>
                <span>{ this.props.title }</span>
                <div className="bs-example" data-example-id="simple-pre">
                    <div style={ { border: '1px dashed rgb(226, 226, 226)' } }>
                        { this.props.children }
                    </div>
                    <div className="zero-clipboard">
                        <span className="btn-clipboard"
                              onMouseOver={ e => { $(e.target).addClass('tooltipped tooltipped-n') } }
                              onMouseLeave={ e => { $(e.target).attr('aria-label', 'Copy to clipboard!') } }
                              onClick={ e => { $(e.target).attr('aria-label', 'Copied!') } }
                              aria-label="Copy to clipboard!"
                              data-clipboard-text={ code } >

                            Copy
                        </span>
                    </div>
                    <pre><code className="xml">{ code }</code></pre>
                </div>
            </div>
        );
    }
}