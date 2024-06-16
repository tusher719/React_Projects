import { useState } from 'react';
import styles from './assets/AddTodo.module.css';
import { IoMdAdd } from "react-icons/io";

function AddTodo({onNewItem}) {

    const [todoName, setTodoName] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleNameChange = (event) => {
        setTodoName(event.target.value);

    }

    const handleDateChange = (event) => {
        setDueDate(event.target.value);
    }

    const handleAddBtnClicked = () => {
        onNewItem(todoName, dueDate);
        setTodoName('');
        setDueDate('');
    }

    return (
        <div className="container">
            <div className={`${styles.AppHeading} row kg-row`}>
                <div className="col-6">
                    <input type="text" value={todoName} onChange={handleNameChange} className={styles.inputTxt} placeholder="Enter Todo Here"/>
                </div>
                <div className="col-4">
                    <input type="date" value={dueDate} onChange={handleDateChange} className={styles.inputTxt}/>
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