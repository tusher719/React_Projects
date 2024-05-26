import React from 'react';
import css from './Item.module.css'

const Item = ({ foodItem }) => {

    // onClick Button Method
    const handleBuyButton = (event) => {
        console.log(event);
        console.log(`${foodItem} being bought`);
    }


    return(
    <li className={`${css['kg-item']} list-group-item d-flex justify-content-between align-items-center`}>
        <span className={css['kg-span']}>{foodItem}</span>
        <button className={`${css.button} btn btn-info`} onClick={(event) => handleBuyButton(event)}>
            Buy
        </button>
    </li>
    );

};

export default Item;