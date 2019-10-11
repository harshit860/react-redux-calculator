import React from 'react'
import './../component/Main.css'
import { connect } from "react-redux"
import { add, sub, div, mul, hist } from './../redux/actions'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            ans: null,
            operand1: null,
            operation: null,
            display: false,
            history: '',
            flaghistory: false
        }
    }

    handleClick = (val) => {
        if (val == "+") {

            this.setState({
                operand1: Number(this.state.value),
                value: '',
                operation: val,
                history: this.state.history + val
            })
        }
        if (val == 'del') {
            this.setState({
                value: '',
                opertion: null,
                operand1: null
            })
        }
        if (val == "x") {
            console.log("hi im in add ")
            this.setState({
                operand1: Number(this.state.value),
                value: '',
                operation: val,
                history: this.state.history + val
            })
        }
        if (val == "/") {

            this.setState({
                operand1: Number(this.state.value),
                value: '',
                operation: val,
                history: this.state.history + val
            })
        }
        if (val == "-") {

            this.setState({
                operand1: Number(this.state.value),
                value: '',
                operation: val,
                history: this.state.history + val
            })
        }
        if (val == '=') {

            if (this.state.operation == "+") {
                this.props.add1(this.state.operand1, Number(this.state.value))
                this.props.hist1(this.state.history)
                this.setState({
                    value: '',
                    operation: '',
                    operand1: '',
                    history: ''


                })
            }
            if (this.state.operation == '-') {
                this.props.sub1(this.state.operand1, Number(this.state.value))
                this.props.hist1(this.state.history)
                this.setState({
                    value: '',
                    operation: '',
                    operand1: '',
                    history: ''
                })
            }
            if (this.state.operation == 'x') {
                this.props.mul1(this.state.operand1, Number(this.state.value))
                this.props.hist1(this.state.history)
                this.setState({
                    value: '',
                    operation: '',
                    operand1: '',
                    history: ''
                })
            }
            if (this.state.operation == '/') {
                this.props.div1(this.state.operand1, Number(this.state.value))
                this.props.hist1(this.state.history)
                this.setState({
                    value: '',
                    operation: '',
                    operand1: '',
                    history: ''
                })
            }
        }
        if (val != '+' && val != '=' && val != '-' && val != 'x' && val != '/' && val != 'del') {
            this.setState({
                value: this.state.value + val,
                history: this.state.history + val
            })
        }
    }

    flagset = () => {
        this.setState({
            flaghistory: !this.state.flaghistory
        })
    }


    render() {
        let a = null
        if (this.state.flaghistory == true) {
            a = this.props.histval.map(a => {
                return <div>
                    {a}
                </div>
            })
        }
        console.log(this.state.history)
        return (
            <div>
                <div style={{ width: "500px", marginLeft: "800px", marginTop: "30px" }}>
                    <input style={{ fontSize: "30px", marginLeft: "0px", width: "500px", height: "50px" }} value={this.state.value}></input>
                    <h3>{this.state.operand1}</h3>
                    <h3>{this.state.operation}</h3>
                    <h3>{this.state.value}</h3>
                    <h1 style={{fontSize:"50px"}}>{this.props.ans1 != null ? (this.props.ans1) : ('')}</h1>
                </div>
                <div style={{ marginLeft: "780px", marginTop: "20px" }}>

                    <div className="flex">
                        <button onClick={() => this.handleClick(1)}>1</button>
                        <button onClick={() => this.handleClick(2)}>2</button>
                        <button onClick={() => this.handleClick(3)}>3</button>
                        <button onClick={() => this.handleClick("+")} style={{ width: "200px", fontSize: "50px", backgroundColor: "grey", color: "white" }}>+</button>
                    </div>
                    <div className="flex">
                        <button onClick={() => this.handleClick(4)}>4</button>
                        <button onClick={() => this.handleClick(5)}>5</button>
                        <button onClick={() => this.handleClick(6)}>6</button>
                        <button onClick={() => this.handleClick("-")} style={{ width: "200px", fontSize: "50px", backgroundColor: "grey", color: "white" }}>-</button>
                    </div>
                    <div className="flex">
                        <button onClick={() => this.handleClick(7)}>7</button>
                        <button onClick={() => this.handleClick(8)}>8</button>
                        <button onClick={() => this.handleClick(9)}>9</button>
                        <button onClick={() => this.handleClick("x")} style={{ width: "200px", fontSize: "50px", backgroundColor: "grey", color: "white" }}>x</button>
                    </div>
                    <div className="flex">

                        <button onClick={() => this.handleClick("=")} style={{ width: "100px", fontSize: "50px", backgroundColor: "grey", color: "white" }}>=</button>
                        <button onClick={() => this.handleClick(0)}>0</button>
                        <button onClick={() => this.handleClick("del")} style={{ width: "100px", fontSize: "30px", backgroundColor: "grey", color: "white" }}>DEL</button>
                        <button onClick={() => this.handleClick("/")} style={{ width: "200px", fontSize: "50px", backgroundColor: "grey", color: "white" }}>/</button>
                    </div>

                    <div className="flex">
                        <button id={"1"} style={{ width: "530px" }} onClick={() => this.flagset()}>History</button>
                    </div>

                    <div className="flex">
                        <h1>{a}</h1>
                    </div>

                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        ans1: state.ans,
        histval: state.history
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add1: (val1, val2) => dispatch(add(val1, val2)),
        sub1: (val1, val2) => dispatch(sub(val1, val2)),
        mul1: (val1, val2) => dispatch(mul(val1, val2)),
        div1: (val1, val2) => dispatch(div(val1, val2)),
        hist1: (val) => dispatch(hist(val))


    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);