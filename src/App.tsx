import React from 'react';
import { useState } from 'react'
import Headerr from './component/็Headerr';
import Todoo from './component/Todoo';
import Footerr from './component/Footerr';
import Taskk from './component/Taskk';

function App() {

  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    /* check pressing enter key here */
  }

  return (
    <div>

      {/* header section */}
        <Headerr title={"Minimal Todo List"} name={"Sasiphol Techamanokul 630610763"}></Headerr>

      {/* todo section */}
      <div className='mx-auto max-w-4xl'>

        {/* task input and add button */}
        <div className='flex space-x-1'>
          <input className='border border-gray-400 w-full text-2xl'
            onKeyDown={onKeyDownCallback} ></input>
          <button className='border border-gray-400 w-8 font-bold'>+</button>
        </div>

        {/* tasks section */}
        <div>
          <Taskk whattodo={'Apex'}></Taskk>
        </div>
      </div>

      {/* footer section */}
      <Footerr copyright ={"copyright © 2021"}></Footerr>
    </div>
  );
}

export default App;
