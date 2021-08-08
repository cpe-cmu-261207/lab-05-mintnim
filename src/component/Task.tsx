type propsTask = {
    id: number;
    name: string;
    deleteFn: Function;
}

const Task =  ({id, name, deleteFn} : propsTask) => {
    return (
        <div className='flex justify-between h-8 items-center py-6 border-b'>
            {name}
        <div className="flex space-x-1 items-center">
          {/* <button className="bg-green-400 w-24 text-2xl" >Done</button> */}
          <button onClick={ () => deleteFn(id) } className="bg-red-400 w-24 text-2xl" >Delete</button>
        </div>
      </div>
    )
}

export default Task