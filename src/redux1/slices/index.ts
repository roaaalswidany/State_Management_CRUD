import { createSlice } from "@reduxjs/toolkit";

export interface Todo {
    id : number
    text : string
    status : string
}

const  initialState : {todos : Array<Todo>, lastId : number} = {
        todos : [
            {
                id : 1, 
                text : "create a react app",
                status : "incompleted"
            },
                        {
                id : 2, 
                text : "create a redux app",
                status : "incompleted"
            },
                        {
                id : 3, 
                text : "create a react toolkit app",
                status : "incompleted"
            }
        ],
        lastId : 3
    }


const todoSlice = createSlice({
    name : "todos",
    initialState,
    reducers : {
        addTask : (state, action) => {
            const task = {
                id : state.lastId +1,
                text : action.payload,
                status : "incompleted"
            }
            state.todos.push(task)
            state.lastId++
        },
        editText : (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id == action.payload.id) {
                    todo.text = action.payload.text
                }
                return todo
            })
        },
        editStatuse : (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id == action.payload) {
                    if (todo.status == "completed") {
                        todo.status = "incompleted"
                    }else{
                        todo.status = "completed"
                    }
                }
                return todo
            })
        },
        deleteTask : (state, action) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id != action.payload
            })
        }
    } 
})

export const {addTask, editText, editStatuse, deleteTask} = todoSlice.actions

export default todoSlice.reducer