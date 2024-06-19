import { useContext, useRef, useState } from 'react';
import styles from './assets/AddTodo.module.css';
import { IoMdAdd } from "react-icons/io";
import { TodoItemsContext } from '../store/todo-items-store';

function AddTodo() {
    const {addNewItem} = useContext(TodoItemsContext);
    const todoNameElement =  useRef();
    const dueDateElement =  useRef();

    const handleAddBtnClicked = () => {
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;
        todoNameElement.current.value = '';
        dueDateElement.current.value = '';
        addNewItem(todoName, dueDate);
    }

    return (
        <div className="container">
            <div className={`${styles.AppHeading} row kg-row`}>
                <div className="col-6">
                    <input type="text" ref={todoNameElement} className={styles.inputTxt} placeholder="Enter Todo Here"/>
                </div>
                <div className="col-4">
                    <input type="date" ref={dueDateElement} className={styles.inputTxt}/>
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success kg-button" onClick={handleAddBtnClicked}>
                        <IoMdAdd />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo;