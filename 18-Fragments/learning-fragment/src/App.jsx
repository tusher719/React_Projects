import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';

function App() {
  // let foodItems = ['Sabzi', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Meat'];

  // let [textToShow, setTextState] = useState('');
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = '';
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
    // console.log(event);
    // setTextState(event.target.value);
}

  return (
    <>
    <Container>
      <h1 className='fooding-heading'>Healthy Food</h1>
      <FoodInput handleKeyDown={onKeyDown}/>
      <ErrorMessage items={foodItems} />
      {/* <p>{textToShow}</p> */}
      <FoodItems items={foodItems} />
    </Container>

    {/* <Container>
    <p>Above is the list of healthy foods that are good for your health and well being.</p>
    </Container> */}

    </>
  );
}

export default App;
