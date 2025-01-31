import React, {useState} from 'react';

export default function MyComponent(){

            
         const [count, setCount] = useState(0);

         const increment = () => {
                      
            
            // Update Function using a (arrow function )
            // setCount is an update function that changes the value of count. When you call setCount(c => c + 1), you're telling React to take the current value of count (which is c), add 1 to it, and then update count with that new value.
             setCount(c => c + 1);
             setCount(c => c + 1);
             setCount(c => c + 1);
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

