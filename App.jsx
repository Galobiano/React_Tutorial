import List from './List.jsx'

function App() {
     
         const fruits = [{id: 1, name: "apple", calories: 95},
          {id: 2, name: "orange", calories: 45},
          {id: 3, name: "banana", calories: 105},
          {id: 4, name: "coconut", calories: 159},
          {id: 5, name: "pineapple", calories: 37}];

          const vegetable = [{id: 5, name: "potatoes", calories: 110},
            {id:  6, name: "celery", calories:  15},
            {id:  7, name: "carrots", calories: 25},
            {id:  8, name: "corn", calories: 63},
            {id:  9, name: "broccoli", calories: 50}];

            return(
              <>
               {fruits.length > 0 && <List items ={fruits} category = "Fruits"/>  }
               {vegetable.length > 0 &&  <List items ={vegetable} category = "Vegetable"/>}
          
                </>
            );   

   
}

export default App





// render list - you're rendering a list in React, you're almost always working with arrays of data

//map() - return new array 

// PropTypes.shape helps to define and check the structure of one object (like a single user) and its properties.

// localeCompare() is a method that compares two strings to see which one should come first, second, etc., based on language and local rules.

// sort(), it means to order the elements from first to last, which could be either in ascending or descending order.