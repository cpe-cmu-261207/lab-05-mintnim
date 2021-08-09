import React from 'react';
import Headerr from './component/็Headerr';
import Todoo from './component/Todoo';
import Footerr from './component/Footerr';


function App() {

  return (
    <div>

      {/* header section */}
        <Headerr title={"Minimal Todo List!"} name={"Sasiphol Techamanokul 630610763"}></Headerr>

      {/* todo section */}
      <Todoo></Todoo>

      {/* footer section */}
      <Footerr copyright ={"copyright © 2021"}></Footerr>

    </div>
  );
}

export default App;
