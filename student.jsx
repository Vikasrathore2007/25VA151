import { useState } from 'react'
import './App.jss'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <img src="https://i.postimg.cc/26pRWsnM/bgmi-profile.jpg" alt="Profile" />
      <button onClick={() => setCount(count + 1)}>Click ME</button>
      <h1>Welcome to my webpage</h1>
      <h2>Hello</h2>
      <p>AIML-2</p>
      <p>Button clicked {count} times</p>
    </>
  )
}

export default App
