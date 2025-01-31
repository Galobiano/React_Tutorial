import React, {useState} from 'react';

export default function MyComponent(){

        const [char, setCharacter] = useState(    {                               character:" ", 
                                        element: " ",
                                        weapon:" "});

        function handleCharacterChange(event){
            //    spread operator - o keep the other properties unchanged while updating only variable
            //  year. make, model
        setCharacter(char => ({...char, character: event.target.value}));
        }
        function handleElementChange(event){  
        // event.target.value means "the user's input." 
        setCharacter(char => ({...char, element: event.target.value}));
        }
        function handleWeaponChange(event){
        setCharacter( char => ({...char, weapon: event.target.value}));
        }

         return(
            <div>
                <p>Your Character Genshin: {char.character} {char.element} {char.weapon}</p>

                <input type="text" value={char.character} onChange={handleCharacterChange} placeholder='Character'/> <br />
                <input type="text" value={char.element}  onChange={handleElementChange} placeholder='Element'/> <br />
                <input type="text" value={char.weapon}  onChange={handleWeaponChange} placeholder='Weapon'/> <br />
            </div>
         );
                  
}

