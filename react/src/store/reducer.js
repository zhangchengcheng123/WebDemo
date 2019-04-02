import {combineReducers} from 'redux';
import {ADD_TODO_ITEM,DEL_TODO_ITEM} from '../actions/actionTypes';



let initValue =[1,2,3]

export default (state=initValue,action)=>{
    switch(action.type){
        case ADD_TODO_ITEM :
            return [...state,action.value];
        case DEL_TODO_ITEM :
            return state.filter((item,index)=>{
                return index !==action.index;
            });
        default :
            return state;
        // case ADD_TODO_ITEM :
        //     let newState=JSON.parse(JSON.stringify(state));
        //     newState.list.push(action.value);
        //     return newState;
        // case DEL_TODO_ITEM :
        //     let newState1=JSON.parse(JSON.stringify(state));
        //     newState1.list.splice(action.index,1);
        //     return newState1;
    }
}

let counter=(state=12,action)=>{
    switch(action.type){
        case 'ADD':
            return state+1;
        case 'DEC':
            return state-1;
        case 'add_odd':
            return state+1;
        case 'add_async':
            return state+1;
        default:
            return state;
    }
}
combineReducers( counter);
// export default combineReducers({
//     counter,
//     todos
// })






// import {combineReducers} from 'redux';
// import { ADD_TODO_ITEM } from '../actions/actionTypes';

// let counter=(state=12,action)=>{
//     switch(action.type){
//         case 'ADD':
//             // return state+1;
//             return state+1;
//         case 'DEC':
//             return state-1;
//         case 'add_odd':
//             return state+1;
//         case 'add_async':
//             return state+1;
//         default:
//             return state;
//     }
// }

// let initValue={
//     list:[1,2,3]
// }
// let todo=(state=initValue,action)=>{
//     switch(action.type){
//         case 'add_item':
//             let newState=JSON.parse(JSON.stringify(state));
//             // let obj=Object.assign({},state,{a:100})
//             newState.list.push(action.value);
//             return newState;
//         case 'del_item':
//             console.log(action.value);
//             let newSta=JSON.parse(JSON.stringify(state));
//             newSta.list.splice(action.value,1);
//             return newSta;
//         default:
//             return state;
//     }
// }

// export default combineReducers({
//     counter,
//     todo
// })