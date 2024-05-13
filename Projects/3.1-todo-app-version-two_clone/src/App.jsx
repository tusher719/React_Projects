import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems";
import './style.css';

function App() {

  const todoItems = [
    {
      name: 'Buy Milk',
      dueDate: '4/10/2024',
    },
    {
      name: 'Go to college',
      dueDate: '30/06/2024',
    },
    {
      name: 'Hello world!',
      dueDate: 'right now',
    },
  ];

  return (
  <center className="todo-container">
    <AppName/>
    <AddTodo/>
    <TodoItems todoItems={todoItems}></TodoItems>
  </center>
  )
}

export default App
