import Styles from './FoodInput.module.css'

const FoodInput = ({handleKeyDown}) => {

    return (
        <input type="text" className={Styles.foodInput} placeholder='Enter Food Item here' onKeyDown={handleKeyDown}/>
    )
}

export default FoodInput;