import { useState } from 'react'

import './App.css'

function App() {
let [counter, setCounter] = useState(0);

 const addValue=()=>{
  setCounter(counter+1);
  console.log("clicked", counter);

}
  return (
    <>
      <h1>Cunter lesgoo</h1>
      <h2>Count is: {counter}</h2>
      <button
      onClick={addValue}
      >Add: </button>
      <br />
      <button>Remove: </button>
    </>
  )
}

export default App
