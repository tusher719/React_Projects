import { useContext } from 'react';
import styles from './assets/WlcMsg.module.css';
import { TodoItemsContext } from '../store/todo-items-store';

const WellcomeMessage = () => {
    const {todoItems} = useContext(TodoItemsContext);

    return todoItems.length === 0 && <p className={styles.welcome}>Enjoy your day. <br /> Happy Coding!</p>;
}

export default WellcomeMessage