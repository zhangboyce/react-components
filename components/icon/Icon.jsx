'use strict';

import React, { Component, PropTypes } from 'react';
import PseudoClassComponentWrapper from '../PseudoClassComponentWrapper.jsx';

class Icon extends Component {

    render() {
        return (
            <i className="fa fa-eye">{ 23 || '-' }</i>
        );
    }
}

Icon.propTypes = {
    className: PropTypes.string,
    showNum: PropTypes.bool,
    showZero: PropTypes.bool
};

export default PseudoClassComponentWrapper(Icon);