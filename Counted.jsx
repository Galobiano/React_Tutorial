import React, {useState} from 'react';


export default function Counted(){
       
                    // useState() to Be able to make and to control the state(data changing ) of one component
                   // setCount(newValue)	Function  used to change the count (variable).
    const [count, setCount] = useState(0);

    const increment = () => {
         // to increase the count of ui 
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count -1);
    }

    const  reset = () => {
        setCount(0);
    }

    return(

        <div className='counter-container'>

            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={decrement}>Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button>
            <button className='counter-button' onClick={increment}>Increment</button>


        </div>
    );



}