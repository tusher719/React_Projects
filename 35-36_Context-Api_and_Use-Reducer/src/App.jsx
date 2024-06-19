import { useReducer } from "react";
import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems";
import WellcomeMessage from "./components/welcomeMessage";
import './style.css';
import TodoItemsContextProvider, { TodoItemsContext } from "./store/todo-items-store";



function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName/>
        <AddTodo/>
        <WellcomeMessage/>
        <TodoItems></TodoItems>
        </center>
    </TodoItemsContextProvider>
  )
}

export default App
