import React, { Component } from 'react';
import {add_todo,del_todo} from './actions/index';
import {connect} from 'react-redux';
import store from './store'

let TodoList = ({dispatch,list})=>{
    let handleAdd = (e) =>{
        if(e.keyCode===13){
            dispatch( add_todo(e.target.value) );
            e.target.value='';
             
            // store.dispatch({
            //     type:'add_item',
            //     value:e.target.value
            // })
        }
    }
    let handleDel = (index) =>{
        dispatch( del_todo(index) );
    }
    return (
        <div>
            <input type="text" onKeyDown={handleAdd} autoFocus />
            <br/>
            <ul>
                {
                    list.map((item,index)=>(
                        <li key={index}>
                            {item}
                            <button onClick={handleDel.bind(this,index)} style={{marginLeft:'30px'}}>
                                删除
                            </button>
                        </li> 
                    ))
                }
            </ul>
        </div>
    );
}
let mapStateToProps = (state)=>{
    return{
         list:state
    }
}
export default connect(mapStateToProps)(TodoList);
  
















// handleAdd=(e)=>{
//         if(e.keyCode===13){
//             // store.dispatch({
//             //     type:'add_item',
//             //     value:e.target.value
//             // })
//             this.props.dispatch(add_todo(e.target.value));
//             e.target.value='';
//         }
//     }
//     handleDel=(index,e)=>{
//         // console.log(index);
//         this.props.dispatch({
//             type:'del_item',
//             value:index
//         })
//     }
//     render() {
//         let {list} =this.props;
//         return (
//             <div>
//                 <input type="text" onKeyDown={this.handleAdd} autoFocus />
//                 <br/>
//                 <br/>
//                 <ul>
//                     {
//                         this.props.list.map((item,index)=>(
//                             <li key={index}>{item}<button onClick={this.handleDel.bind(this,index)} style={{marginLeft:'30px'}}>删除</button></li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }


