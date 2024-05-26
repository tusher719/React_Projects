import Styles from './FoodInput.module.css'

const FoodInput = () => {

    const handleOnChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <input type="text" className={Styles.foodInput} placeholder='Enter Food Item here' onChange={handleOnChange}/>
    )
}

export default FoodInput;