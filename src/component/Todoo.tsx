import {useState} from 'react'
import React from 'react'
import Task from 'Task'

type propsTodoo = {
    id: number;
    name: string;
}

const Todoo = () => {

    const [curTask, setCurTask] = useState<string>('')
    const [tasks, setTasks] = useState<propsTodoo[]>([])
  
    const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
      setCurTask(ev.target.value)
    }
  
    const addTask = (taskName: string) => {
      const newId = (new Date()).getTime()
      const newTasks = [...tasks, {id: newId, name: taskName}]
  
      setTasks(newTasks)
    }
  
    const deleteTask = (id: number) => {
      const newTasks = tasks.filter(x => x.id !== id)
      setTasks(newTasks)
    }
  
    return (
      <div style={{backgroundColor: 'yellow'}}>
        <h3> React todo list</h3> 
        <input onChange={onChangeCallback}></input>
        <button onClick={() => addTask(curTask)}>Add Task</button>
        {tasks.map( x => <Task id={x.id} name={x.name} deleteFn={deleteTask}/>)}
      </div>
    )
  }
  
  export default Todoo














  // const Todoo =  (props: propsTodoo) => {
//     return (
//         <div className='mx-auto max-w-4xl'>
//             <span className='text-center italic my-2 text-2xl'>{props.list}</span>
//         </div>
//     )
// }

// export default Todoo