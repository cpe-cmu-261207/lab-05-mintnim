import {useState} from 'react';
import React from 'react';
import Task from './Task';

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
      if(curTask === ""){
        alert("Task cannot be empty!")
      }else{
        const newId = (new Date()).getTime()
        const newTasks = [...tasks, {id: newId, name: taskName}]
        setTasks(newTasks)
      }
    }
  
    const deleteTask = (id: number) => {
      const newTasks = tasks.filter(x => x.id !== id)
      setTasks(newTasks)
    }

    const doneTask = (id: number) => {
      const doneTasks = tasks.filter(x => x.id !== id)
      setTasks(doneTasks)
    }
  
    return (
      <div className='space-x-1 px-24'>
        <div className='flex'>
        <input className='border border-gray-400 w-full text-2xl' onChange={onChangeCallback}></input>
        <button className='border border-gray-400 w-8 font-bold' onClick={() => addTask(curTask)}>+</button>
        </div>
        <div>
          {tasks.map( x => <Task id={x.id} name={x.name} deleteFn={deleteTask} doneFn={doneTask}/>)}
        </div>
      </div>
    )
  }
  
  export default Todoo