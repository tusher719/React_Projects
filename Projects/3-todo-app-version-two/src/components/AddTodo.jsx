import styles from './assets/AddTodo.module.css';

function AddTodo() {
    return (
        <div className="container">
            <div className={`${styles.AppHeading} row kg-row`}>
                <div className="col-6">
                    <input type="text" className={styles.inputTxt} placeholder="Enter Todo Here"/>
                </div>
                <div className="col-4">
                    <input type="date" className={styles.inputTxt} />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success kg-button">Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo;