import React, {Component} from 'react';
import {NumericBtn} from './Calculator';
import css from '../css/style.css';

class App extends Component {
    render() {

        const btnList = require('./Config.js').btnList;
        let btnArray = [];
        btnList.map((val, index) => {
            return btnArray.push(<NumericBtn key={index} val={val} />);
        });

        return (
            <div className="row">
                <div className="col s12">
                    <input type="text" disabled="disabled"/>
                </div>
                {btnArray}
            </div>
        )
    }
}

module.exports = App;