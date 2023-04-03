import React, { Component } from 'react';

class Counter extends Component {

    state = {
        counter: 0,
        fixed: 1,
        updateMe: {
            toggleMe: false,
            dontChangeMe: 1,
        }
    } // Class properties 문법(Babel)은 자동으로 CRA에 저장되어 있다.

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         counter: 0
    //     };
    //     this.handleIncrease = this.handleIncrease.bind(this);
    //     this.handleDecrease = this.handleDecrease.bind(this);
    // }

    handleIncrease = () => {
        // console.log(this);
        // console.log('increase');
        // this.setState({
        //     counter: this.state.counter + 1
        // });
        this.setState(state => ({
            counter: state.counter + 1
        }));
        this.setState(state => ({
            counter: state.counter + 1
        }));
        this.setState(state => ({
            counter: state.counter + 1
        }));
        this.setState(state => ({
            counter: state.counter + 1
        }));
    }

    handleDecrease= () => {
        this.setState({
            counter: this.state.counter - 1
        });
        // console.log('decrease');
    }

    // handleToggle = () => {
    //     this.setState({
    //         updateMe: {
    //             ...this.state.updateMe,
    //             toggleMe: !this.state.updateMe.toggleMe,
    //         }
    //     })
    // }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값: {this.state.fixed}</p>
            </div>
        );
    }
}

// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             throw new Error('Unhandled action'); // 콘솔에서 에러를 볼 수 있다.
//     }
// }
// function Counter() {
//     const [number, dispatch] = useReducer(reducer, 0); // 처음 받아온 값은 0이다.

//     const onIncrease = () => {
//         dispatch({
//             type: 'INCREMENT'
//         })
//     };
//     const onDecrease = () => {
//         dispatch({
//             type: 'DECREMENT'
//         })
//     };
    
//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     )
// }

export default Counter;