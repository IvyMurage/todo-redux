import { createSlice } from "@reduxjs/toolkit"
import {  State } from "./types"
const initialState: State = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        fetchTodos: (state, action) => {
            state.todos = action.payload
        },
        addTodo: (state, action) => {
            state.todos = [action.payload, ...state.todos]
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
        }    
    }

})

export const { reducer} = todoSlice
export default todoSlice.reducer

// export default function todoReducer(state:State , action: Action){
// switch(action.type){
//     case 'FETCH-TODOS':
//         return {
//             ...state,
//             todos: action.payload
//         }
//     case 'ADD-TODO': 
//     return{
//         ...state, 
//         todos:[ action.payload, ...state.todos]
//     }
//     case 'DELETE-TODO': 
//     return {
//         ...state,
//         todos: state.todos.filter(todo => todo.id !== action.payload)
//     }

//     case 'EDIT-TODO':
//         return {
//             ...state,
//             todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload: todo)
//         }
//     default:
//         return state
// }
// }