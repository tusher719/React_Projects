import TodoItem from "./TodoItem";
import styles from './assets/TodoItems.module.css';

const TodoItems = ({ todoItems }) => {
    return (
        <div className="container">
            <div className={`${styles.itemsContainer} ${styles.itemsBG}`}>
                {todoItems.map(item => <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>)}
            </div>
        </div>
    );
}

export default TodoItems;