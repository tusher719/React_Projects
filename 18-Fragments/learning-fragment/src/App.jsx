import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';

function App() {
  let foodItems = ['Sabzi', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Meat'];
  
  return (
    <>
      <h1 className='fooding-heading'>Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
