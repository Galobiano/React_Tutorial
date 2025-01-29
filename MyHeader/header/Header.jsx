import Styles from './Header.module.css'
import Profile from '../assets/profile.jpg'


export default function Header(){

    return(
        <>

           <header className={Styles["my-title"]}>
            My react JS 
           </header>
           <div className= {Styles["my-header"]}>
           <img className={Styles["my-profile"]} src={Profile} alt="" width="200px" />
           <p className={Styles["my-text"]}>Hi! im Gerelyn</p>
           </div>
        </>
    );
}