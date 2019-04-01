import React, { Component } from 'react';
import store from './store';

//store是连接action和Reducer的一个对象
//action是一个对象，描述state的变化
//Reducer定义了如何响应action描述的state变化


console.log(store.getState());

class Counter extends Component {
    constructor(){
        super();
        this.state={
            num:store.getState().counter
        }
        store.subscribe(()=>{ 
            this.setState({
                num:store.getState().counter
            });
        })
    }
    handleAdd=()=>{
        let action={type:'ADD',value:10};
        store.dispatch(action);
    }
    handleDec=()=>{
        let action={type:'DEC'};
        store.dispatch(action);
    }
    handleOddAdd=()=>{
        let action={type:'add_odd'};
        if(store.getState().counter % 2 !== 0){
            store.dispatch(action);
        }
    }
    handleAsync=()=>{
        let action={type:'add_async'};
        setTimeout(function(){
            store.dispatch(action);
        },1000);
    }
    render() {
        return (
            <div>
                <p>
                  Clicked: <span>{this.state.num}</span> times
                  <br />
                  <button onClick={this.handleAdd}>+</button>
                  <button onClick={this.handleDec}>-</button>
                  <br />
                  <button onClick={this.handleOddAdd}>Increment if odd</button>
                  <button onClick={this.handleAsync}>Increment async</button>
                  </p>
            </div>
        );
    }
}

export default Counter;