import React, {Component} from 'react';
import css from '../css/style.css';

class NumericBtn extends Component {
    render() {
        const { val } = this.props;
        return (
            <div className="col s3">
                <a className="waves-effect waves-teal btn-flat">{val}</a>
            </div>

        )
    }
}

class OperatorBtn extends Component {
    render() {
        return (
            <div></div>
        )
    }
}

module.exports = {
    "NumericBtn": NumericBtn,
    "OperatorBtn": OperatorBtn
};