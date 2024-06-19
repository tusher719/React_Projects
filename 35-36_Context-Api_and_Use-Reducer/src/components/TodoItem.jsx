import { useContext } from 'react';
import styles from './assets/TodoItem.module.css';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { TodoItemsContext } from '../store/todo-items-store';

function TodoItem({ todoName, todoDate }) {
    const {deleteItem} = useContext(TodoItemsContext);

    return (
        <div className="container">
            <div className={`${styles.AppBody} ${styles.kgRow} row kg-row`}>
                <div className="col-6">{todoName}</div>
                <div className="col-4">{todoDate}</div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger kg-button" onClick={() => deleteItem(todoName)}>
                        <RiDeleteBin6Fill />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;