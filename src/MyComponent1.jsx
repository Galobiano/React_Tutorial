import React, {useState, useEffect} from 'react';



 export default function MyComponent1 (){

                
    const[width, setWidth] = useState(window.innerWidth);
    const[height, setHeight] = useState(window.innerHeight);


    // Add event listeners to listen for events like resizing.
    // Clean up event listeners when the component is removed to prevent memory leaks and improve performance.
    useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVEN LISTENER ADDED")
    },[]);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVEN LISTENER ADDED")
        },[]);

    
    useEffect(() => {
        document.title  = `Size: ${width} x ${height}`;
    })    

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return(
        <div>
            <p>WIndow Width: {width}px</p>
            <p>WIndow Height: {height}px</p>
        </div>
    );
}