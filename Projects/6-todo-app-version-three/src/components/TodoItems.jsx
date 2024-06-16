import TodoItem from "./TodoItem";
import styles from './assets/TodoItems.module.css';

const TodoItems = ({ todoItems, onDeleteClick }) => {
    return (
        <div className="container">
            <div className={`${styles.itemsContainer} ${styles.itemsBG}`}>
                {todoItems.map((item) => (
                    <TodoItem
                    key={item.name}
                    todoName={item.name}
                    todoDate={item.dueDate}
                    onDeleteClick={onDeleteClick}
                    ></TodoItem>
            ))}
            </div>
        </div>
    );
}

export default TodoItems;