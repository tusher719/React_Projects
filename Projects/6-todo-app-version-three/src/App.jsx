import { useState } from "react";
import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems";
import WellcomeMessage from "./components/welcomeMessage";
import './style.css';

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate, }
    ];
    setTodoItems(newTodoItems);
  }

  return (
  <center className="todo-container">
    <AppName/>
    <AddTodo onNewItem={handleNewItem}/>
    {todoItems.length === 0 && <WellcomeMessage />}
    <TodoItems todoItems={todoItems}></TodoItems>
  </center>
  )
}

export default App
