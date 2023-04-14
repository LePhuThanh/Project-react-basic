import React from "react";
import "../../styles/ListTodo.scss";
import AppTodo from './AddTodo';
import { toast } from 'react-toastify';
import Color from "../HOC/Color";

class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: 'Todo 1', title: 'Doing homework' },
            { id: 'Todo 2', title: 'Learning an English' },
            { id: 'Todo 3', title: 'Hanging out with girl friend' }
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        // let currentListTodo = this.state.listTodo;
        // currentListTodo.push(todo);
        this.setState({
            listTodo: [...this.state.listTodo, todo],
            // listTodo: currentListTodo
        })
        //toast("Added to-do information!")
        toast.success("Added to-do information!")
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodo
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodo: currentTodos
        })
        toast.success("Deleted succeed!")
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTodoCopy = [...listTodo];
            //Find index of specific object using findIndex method. 
            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id));
            //Update object's name property.
            listTodoCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodo: listTodoCopy,
                editTodo: {} //When setting editTodo = empty =>  save button => edit
            })
            toast.success("Updated succeed!")
            return;
        }
        //edit
        this.setState({
            editTodo: todo
        })

    }
    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodo, editTodo } = this.state;
        //let listTodo = this.state.listTodo; // the same
        //
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>>> check empty object', isEmptyObj)
        return (
            <div>
                <h2>Enter your to-do list today!</h2>
                {/* <h4>Simple TODO Apps with React.js (Phu Thanh &amp; Handsome )</h4> */}
                <div className="list-todo-container">
                    <AppTodo
                        addNewTodo={this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {listTodo && listTodo.length > 0 &&
                            listTodo.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {/* Check empty */}
                                        {isEmptyObj === true ?
                                            //When edit obj equal empty, which is run commonly, we have not filed it yet.
                                            <span> {index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {/* When edit obj equal don't empty which is print the following paragraphs. */}
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input
                                                            value={editTodo.title}
                                                            onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span> {index + 1} - {item.title} </span>
                                                }
                                            </>
                                        }

                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}

                                        >
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'
                                            }
                                        </button>

                                        <button className="delete"
                                            onClick={() => this.handleDeleteTodo(item)}

                                        >Delete
                                        </button>

                                    </div>
                                )

                            })
                        }
                    </div>
                </div>
            </div >
        )
    }
}

export default Color(ListTodo);

