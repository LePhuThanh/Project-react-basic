import { SET_TOFO_INPUT, ADD_TODO, DELETE_TODO } from './constants'


export const setTodoInput = payload => ({
    type: SET_TOFO_INPUT,
    payload
})

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})

export const deleteTodo = payload => ({
    type: DELETE_TODO,
    payload
})