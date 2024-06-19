import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from './assets/TodoItems.module.css';

const TodoItems = ({ onDeleteClick }) => {
    const {todoItems} = useContext(TodoItemsContext);

    return (
        <div className="container">
            <div className={`${styles.itemsContainer} ${styles.itemsBG}`}>
                {todoItems.map((item) => (
                    <TodoItem
                    key={item.name}
                    todoName={item.name}
                    todoDate={item.dueDate}
                    ></TodoItem>
            ))}
            </div>
        </div>
    );
}

export default TodoItems;