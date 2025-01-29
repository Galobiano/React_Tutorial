import Profile from './assets/profile.jpg'

export default function Card(){
    
    return(
        <div className='card'>
       <img className='my-profile' src= {Profile} alt="profile-pic" width="200px"/>
        <h1 className='my-name'>Gerelyn</h1>
        <p className='my-text'>I want to be a react js programmer </p>
       </div>
    );
}