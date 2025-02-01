import React, {useState} from 'react';
export default function TodoList(){


     const [task, SetTasks] = useState(["Eat breakfast", "Take a shower", "Walk to dog"]);
     const [newTask,  setNewTask] = useState("");

     function handleInputChange(event){
           setNewTask(event.target.value);
     }

     function addTask(){
        
        // The trim() method is used to remove spaces from the beginning and end of a string.
        if(newTask.trim() !== ""){

        
                SetTasks(t => [... task, newTask]);
                setNewTask("");
        }  
     }

     function deletetask(index){

        const updatedTasks = task.filter((_,i) => i !== index );
        SetTasks(updatedTasks);

     }

     function moveTaskUp(index){
        
        //Check if the task can move down.
        if(index > 0){
            // Make a copy of the tasks.
            const updatedTasks = [...task];
            //  Swap the task with the one below.  
            [updatedTasks[index], updatedTasks[index -1 ]] = 
            [updatedTasks[index -1 ], updatedTasks[index]];
           
            //Update the state with the new order.
            SetTasks(updatedTasks);

        }

     }

     function moveTaskDown(index){

        if(index < task.length - 1){
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index +1 ]] = 
            [updatedTasks[index + 1 ], updatedTasks[index]];
            SetTasks(updatedTasks);

        }

     }
    
    

    return(
         <div className='to-do-list'>

            <h1>To-Do-List</h1>

            <div>
                <input type="text"
                placeholder='Enter a Task...'
                value={newTask} onChange={handleInputChange} />
            
            <button className='add-button' onClick={addTask}>
                Add
            </button>
             
            </div>

                <ol>
                    {task.map((task, index) => 
                       <li key={index}>
                            <span className='text'>{task}</span>
                            <button className='delete-button'
                                    onClick={() => deletetask (index)}>
                                Delete
                            </button>
                            <button className='move-button'
                                    onClick={() => moveTaskUp (index)}>
                                Up👆🏻 
                            </button>
                            <button className='move-button'
                                    onClick={() => moveTaskDown (index)}>
                                Down👇🏻
                            </button>
                       </li>
                    )}
                </ol>
         </div>
        
    );
    
}