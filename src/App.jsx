import MyComponent from './MyComponent.jsx'

function App() {

            return(
              <>
               <MyComponent/>
                </>
            );   

   
}

export default App

// useEffect () = React hook that tell react do some when (pick one):
//          this component re-renders
//          this component mounts
//          the state of value


//1. useEffect(() => {})            runs after every re-render
//2. useEffect(() => {},[])         run only on mount
//3. useEffect(() => {}, [value])   run on mount + when value changes 








