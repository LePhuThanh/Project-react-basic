
//Instead of:
// import React, { useContext } from "react";
// import { StoreContext } from "./store";
//Then:
import { useStore, actions } from "./store"
import { useRef } from "react"
import { deleteTodo } from "./store/actions"

const TodoApp = () => {

    //Get Golal State
    //Instead of:
    //const [state, dispatch] = useContext(StoreContext)
    //Then:
    const [state, dispatch] = useStore()
    //console.log(state)

    const { todos, todoInput } = state
    console.log('todoInput: ', todoInput);

    const todoAppRef = useRef()

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput))
        dispatch(actions.setTodoInput(''))
        todoAppRef.current.focus()
    }
    console.log('todos: ', todos);

    return (
        <div>
            <h3 style={{ color: '#bcadf7' }}>2. Create Global State Use UseContext + UseReducer</h3>
            <input
                ref={todoAppRef}
                value={state.todoInput}
                placeholder="Enter todo..."
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button onClick={handleAdd}>Add</button>
            {todos.map((todo, index) => (
                <li key={index}>{todo}
                    <span onClick={() => dispatch(deleteTodo(index))}> &times;</span>
                </li>
            ))}
        </div>
    )
}

export default TodoApp;