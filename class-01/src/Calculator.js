import React, {Component} from 'react';
import css from '../css/style.css';
import PropTypes from 'prop-types';

const CalculatorBtn = ({val, delegateFun}) => {
    return (
        <div className="col s3">
            <a className="waves-effect waves-teal btn-flat" onClick={()=> delegateFun(val)}>{val}</a>
        </div>
    );
};

CalculatorBtn.propTypes = {
    val: PropTypes.any.isRequired,
    delegateFun: PropTypes.func.isRequired
};

module.exports = CalculatorBtn;


//Take a note here
// class CalculatorBtn extends Component {
//     render() {
//         const {key, val} = this.props;
//         return (
//             <div className="col s3">
//                 <a className="waves-effect waves-teal btn-flat">{val}</a>
//             </div>
//         )
//     }
// }