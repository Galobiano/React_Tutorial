import React, {useState} from 'react';

export default function MyComponent(){

    const [character, setCharacter] = useState(["Xiao", "Kinich", "Arlecchino"]);

    function handleAddCharacter(){
         const newCharacter = document.getElementById("characterInput").value;
         document.getElementById("characterInput").value = "";

        setCharacter(character => [...character, newCharacter]);
    }

    function handleRemoveCharacter(index){
      // filter(): Uses a condition (returns true or false). removes elements that don’t meet the condition.
      
      //Use _ when you don’t need a parameter and want to make it clear you're intentionally ignoring it. It’s mostly used for cleaner, more readable code.
        setCharacter(character.filter((_, i) => i !== index));
            
    }


    return(
        <div>
            <h2>List of Genshin Character:</h2>
            <ul>{/* index → The position of the item in the array (0, 1, 2, etc.). */}
             {/* map() changes every element into something new. */}
                {character.map((character, index) => 
                <li key={index} onClick={() => handleRemoveCharacter(index)}> {character}
                </li> )}
            </ul>
          <input type="text" id="characterInput" placeholder='Enter Character name' />
          <button onClick={handleAddCharacter}>Add Character</button>
        </div>
    );
}

