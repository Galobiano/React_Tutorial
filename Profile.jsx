export default function Profile(){

    const imageUrl = './src/assets/img2.jpg';
    
    const handleClick = (e) => e.target.style.display ="none";
    return(
    
        <img onClick={(e) => handleClick(e)} src={imageUrl} width= "200px"/>



    );
}