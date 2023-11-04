import React, {  useState } from 'react';
import './Counter.css'
export const Counter = () => {
    const [number, setNumber] = useState(0);

    const count = (e) => {
        console.log(e)
        if (e.target.name == "increment") {
            setNumber(number + 1)
        }
        if (e.target.name == "decrement") {
            if (number > 0)
                setNumber(number - 1)
        }
    }
    return (
        <div >
            <button name="increment" className='incrementButton' onClick={count}>
                +
            </button>
            <input type="text" name="CountNumber" className='countInput' value={number} onChange={count} />
            <button name="decrement" className='decrementButton'  onClick={count}>
                -
            </button>
        </div>
    );
};
