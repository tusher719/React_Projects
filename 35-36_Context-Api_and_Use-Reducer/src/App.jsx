import { useState } from "react";
import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems";
import WellcomeMessage from "./components/welcomeMessage";
import './style.css';
import { TodoItemsContext } from "./store/todo-items-store";

function App() {

  // Insert Item
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currntValue) => [
        ...currntValue,
        { name: itemName, dueDate: itemDueDate, }
      ]);
  };

  // Delete Item
  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    console.log(`Item Delete: ${todoItemName}`);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem,
      }}>
      <center className="todo-container">
        <AppName/>
        <AddTodo/>
        <WellcomeMessage/>
        <TodoItems></TodoItems>
        </center>
    </TodoItemsContext.Provider>
  )
}

export default App
