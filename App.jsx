import UserGreeting from './UserGreeting.jsx'

function App() {
  
     return(
        <>  
         
        <UserGreeting isLoggedIn ={false} username = "Gerelyn" />
          
        </>
     );
   
}

export default App


// Conditional rendering - allows you to control what gets rendered   in your application based on certain condtion (show, hide, or change components) 
// conditional - is a else statement
// rendering - showing or update content

