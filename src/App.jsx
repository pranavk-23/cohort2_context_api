import React, { useContext, useEffect, useMemo, useState } from 'react'
import { countContext } from './context';

export function App() {

const[count , setCount] = useState(0);
  
  return (<div>
    <countContext.Provider value={count}>
    <Count count = {count} setCount={setCount}></Count>
    </countContext.Provider>
  </div>)
}

function Count ({setCount}){

return(
  <div>
    <RenderCount ></RenderCount>
    <Buttons setCount= {setCount} ></Buttons>

  </div>
)

}

function RenderCount(){

  const count = useContext(countContext)

return(<div>
  {count}
</div>)

}

function Buttons({setCount}){

  const count = useContext(countContext);


return(<div>
  <button onClick={() => {
    setCount( count + 1)
  }}>Increase count</button>
  <button onClick={()=> {
    setCount(count-1)
  }}>Decrease count</button>
</div>)
}


export default App;

