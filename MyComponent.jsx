import React, {useState} from 'react';


export default function MyComponent(){
                  
    const  [name, setName] = useState("Guest");
    const  [age, setAge] = useState(0); 
    const  [isEmployed, setIsEmployed] = useState(false);
    const updateName = () => {
        setName("Xiao");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggledEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Set Name</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggledEmployedStatus}>Toggled Employed</button>
        </div>
    );


    
}