import Student from './Student.jsx'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'

function App() {
  
     return(
        <>  
         
         <Student image = {img1} name = "Xiao" element = "Anemo"/>
         <Student image = {img2} name = "Arlecchino" element = "Pyro"/>
         <Student image = {img3} name = "Kinich" element = "Dendro"/>




          
        </>
     );
   
}

export default App



