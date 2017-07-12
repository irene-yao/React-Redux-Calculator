import React, {Component} from 'react';
import css from '../css/style.css';
import CalculatorBtn from './Calculator';
import {btnType, btnArray} from './Config.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: '',
            operator: '',
            preNum:'',
            displayNum: '',
            clickType:''
        }
    }

    UpdateNumber = number => {
        let {displayNum, clickType} = this.state; 
        let val;

        displayNum = displayNum.toString();

        if(clickType === btnType.Numeric) {
            displayNum = displayNum === '0' ? '' : displayNum;
            val = eval(displayNum + number);                
        }
        else {
            val = number;
        }

        this.setState({
            ...this.state, 
            displayNum : val,
            clickType: btnType.Numeric
        });
    }

    updateOperator = operator => {
        this.state.operator = operator;
        this.state.preNum = this.state.displayNum;
        this.state.clickType = btnType.Operator;
    }
    
    calculate = () => {
        let {sum, operator, preNum, displayNum, clickType} = this.state;

        if(operator !== '') {
            if(clickType === btnType.Equal) {
                let result = eval(sum + operator + preNum);
                this.setState({
                    ...this.state, 
                    sum : result, 
                    displayNum : result, 
                    clickType: btnType.Equal
                });
            }
            else 
            {
                let result = eval(preNum + operator + displayNum);
                this.setState({
                    ...this.state, 
                    sum : result,
                    preNum : displayNum,
                    displayNum : result,
                    clickType: btnType.Equal
                });
            }
        }

        //Take a note here
        //Change state object directly will not trigger re-render
        // this.state.number = val;
        // this.setState(this.state);

        //Set state
        //this.setState(prestate => {prestate.sum = val;});
    }

    clearAll = () => {
        this.setState({
            sum: '',
            operator: '',
            preNum: '',
            displayNum: '',
            clickType: ''
        });
    }

    render() {
        const {displayNum} = this.state;
        let delegateFun;
        let btnList = [];

        btnArray.map((btn, index) => {
            switch (btn.type) {
                case btnType.Numeric:
                    delegateFun = this.UpdateNumber;
                    break;
                case btnType.Operator:
                    delegateFun = this.updateOperator;
                    break;
                case btnType.Equal:
                    delegateFun = this.calculate;
                    break;
                case btnType.Clear:
                    delegateFun = this.clearAll;
                    break;
                default:
                    break;
            }

            return btnList.push(<CalculatorBtn key={index} val={btn.val} delegateFun={delegateFun} />);
        });

        return (
            <div className="row">
                <div className="col s12">
                    <input type="text" disabled="disabled" value={displayNum || '0'}/>
                </div>
                {btnList}
            </div>
        )
    }
}

module.exports = App;