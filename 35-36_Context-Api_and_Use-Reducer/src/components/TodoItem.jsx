import styles from './assets/TodoItem.module.css';
import { RiDeleteBin6Fill } from "react-icons/ri";

function TodoItem({ todoName, todoDate, onDeleteClick }) {

    return (
        <div className="container">
            <div className={`${styles.AppBody} ${styles.kgRow} row kg-row`}>
                <div className="col-6">{todoName}</div>
                <div className="col-4">{todoDate}</div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger kg-button" onClick={() => onDeleteClick(todoName)}>
                        <RiDeleteBin6Fill />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;