import { useState } from 'react';
import styles from './App.module.css';
import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';

function App() {
  const [calVal, setCalVal] = useState('0');
  const onButtonClick = (buttonText) => {
    if (buttonText === 'c') {
      setCalVal('');
    } else if (buttonText === '=') {
      const result = eval(calVal);
      setCalVal(result);      
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
      
    }
    // console.log(buttonText)
  }

  return (
    <div className={styles.calculator }>
      <Display displayVal={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  )
}

export default App
