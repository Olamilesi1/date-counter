import './App.css';
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
 

  function increaseStep () {
    setStep (step + 1)
  }

  function decreaseStep () {
     setStep (step - 1)
  }

  function increaseCount () {
    setCount (count + step)
  }

  function decreaseCount () {
   setCount (count - step)
  }

  const date = new Date ('june 21 2027');
  date.setDate(date.getDate() + count)

  return (
    <div>

      <div className='first-btn'>
        <button onClick = {increaseStep}>+</button>
        <span>Step: {step}</span>
        <button onClick = {decreaseStep}>-</button>
      </div>

      <div className='first-btn'>
        <button onClick = {increaseCount}>+</button>
        <span>Count: {count}</span>
        <button onClick = {decreaseCount}>-</button>
      </div>

<p>
<span>{count === 0 ? 'Today is ' : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was ` }</span>
<span>{date.toDateString ()}</span>
</p>
      
      {/* <p {count === 1 ? 'Today is Monday' : `{count} days ago was`} > </p> */}
  
    </div>
  )
}

export default App;
