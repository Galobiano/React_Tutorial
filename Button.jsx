
export default function Button(){
     
    const handleClick = (e) => e.target.textContent = "OUCH!😠" ;
    return(
        <button onClick={handleClick}>Click Me 😊</button>
    );
}


// emoji - win + ;


/*

let count = 0;
     const handleClick = (name) => {
            if(count < 10){
                count++;
                console.log(`${name} you clicked me ${count} time/s`);
            }else{
                console.log(`${name} stop clicking me`)
            }
     }
*/


