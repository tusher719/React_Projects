import styles from './assets/TodoItem.module.css';

function TodoItem({ todoName, todoDate, onDeleteClick }) {

    return (
        <div className="container">
            <div className={`${styles.AppBody} ${styles.kgRow} row kg-row`}>
                <div className="col-6">{todoName}</div>
                <div className="col-4">{todoDate}</div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger kg-button" onClick={() => onDeleteClick(todoName)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;