

export default function UserGreeting(props){

    const welcomeMessage = <h1 className="welcome-message">Welcome {props.username}</h1>;

    const loginPrompts = <h1 className="login-prompts">Please continue login</h1>;
     
    if(props.isLoggedIn){
        return welcomeMessage;
    }else{
        return loginPrompts;
    }
}



