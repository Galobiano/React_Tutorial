export default function Food(){
    
    const food1 = "Orange";
    const food2 = "Apple";
    const food3 = "WaterMelon"

    return(
        <>
        
        <header className="my-food">Food</header>
        <ul className="list-food">
            <li className="my-list-food">{food1.toUpperCase()}</li>
            <li className="my-list-food">{food2}</li>
            <li className="my-list-food">{food3}</li>
        </ul>
            
        </>
    );
}