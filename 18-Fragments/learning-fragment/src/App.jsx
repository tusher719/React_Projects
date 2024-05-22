import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';

function App() {
  let foodItems = ['Sabzi', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Meat'];
  
  return (
    <>
    <Container>
      <h1 className='fooding-heading'>Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </Container>

    <Container>
    <p>Above is the list of healthy foods that are good for your health and well being.</p>
    </Container>
    </>
  );
}

export default App;
