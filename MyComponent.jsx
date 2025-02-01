import React, {useState} from 'react';

export default function MyComponent(){

    const [iphone, setIphone] = useState([]);
    const [iphoneYear, setIphoneYear] = useState((new Date().getFullYear ()));
    const [iphoneMake, setIphoneMake] = useState("");
    const [iphoneModel, setIphoneModel] = useState("");

    function handleAddIphone(){

            const newIphone = {year: iphoneYear,
                               make: iphoneMake, 
                               model: iphoneModel};

    setIphone(i => [...i, newIphone]);

    // reset when you are done to click 
    setIphoneYear(new Date().getFullYear());
    setIphoneMake("");
    setIphoneModel("");
    }

    function handleRemoveIphone(index){

        setIphone(iphone => iphone.filter((_, i) => i !== index));

        
    }

    function handleYearChange(event){
        setIphoneYear(event.target.value);

    }

    function handleMakeChange(event){
        setIphoneMake(event.target.value);
    }

    function handleModelChange(event){
        setIphoneModel(event.target.value);
    }
        
    



    return(
             <div>
                
             <h2>List of Iphone Object</h2>
                   {/* In React, the key prop is required when rendering lists. It's used by React internally to help it track and manage individual elements more efficiently when the list changes (such as when an item is added, removed, or reordered). */}
                <ul>
                    {iphone.map((iphone, index) =>
                    <li key = {index} onClick={ () => 
                    //The index is passed as an argument to handleRemoveIphone(), which allows the function to know which item should be removed from the list.
                    handleRemoveIphone(index)}>
                        {iphone.year} {iphone.make} {iphone.model}

                    </li>
                )}
                </ul>


             <input 
             type="number"
             value={iphoneYear} 
             onChange={handleYearChange} /> 
             <br />

             <input 
             type="text" 
             value={iphoneMake}
             onChange={handleMakeChange}  placeholder='Enter the iphone make'/> 
             <br />

             <input 
             type="text" 
             value={iphoneModel} 
             onChange={handleModelChange}  placeholder='Enter the iphone model'/> <br />
           
           <button onClick={handleAddIphone}> Add Iphone</button>

           <h1>Hello World</h1>
           <h2>Hello World Again</h2>
         </div>
    );


}
