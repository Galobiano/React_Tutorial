import React, {useState} from 'react';

export default function Timer() {
     
    const [time, setTimer] =  useState(0);
    const [time1, setTimer2] = useState(0);
    const [time2, setTimer3] = useState(0);

    //  Hours  
    const hours = () => {
        setTimer(time + 1);
    }

    const decrement = () => {
        setTimer(time -1);
    }
    //minutes
    const minutes = () => {
        setTimer2(time1 + 1);
    }
    const decrement1 = () => {
        setTimer2(time1 -1);
    
    }

    const seconds = () => {
        setTimer3 (time2 + 1);
    }
    const decrement2 = () => {
        setTimer3 (time2 - 1);
    }

   

    return(
        <>
            <div className='set'>
                <p className='counted-1'>{time}</p>
                <p className='counted-2' >:</p>
                <p className='counted-3'>{time1}</p>
                <p className='counted-4'>{time2}</p>
            </div >

            <div  className='time-container'>
            <button className='time-button' onClick={hours}>Hours</button>
            <button className='time' onClick={decrement}>Decrement</button>
            <button className='time-button' onClick={minutes}>Minutes</button>
            <button className='time' onClick={decrement1}>Decrement</button>
            <button className='time-button' onClick={seconds}>Second</button>
            <button className='time' onClick={decrement2}>Decrement</button>
        </div>

        </>
    );
}

