import React, { useState } from "react"

// Hook Rules
  // 1. Hooks can only be used in functional components
  // 2. You can only declare hooks at the top level
  // of a functional component

// Types of Components
  // Functional and Class
  // Function - A functional component that uses React Hooks

const App = () => {

  const [counter, setCounter] = useState(10)
  const [isToggled, setToggle] = useState(false)

  // Primitive Data Types work best in useState and useReducer is suggested for complex data types
  // However, useState will work fine with objects and arrays as long as we spread in prev values
  // we need maintained
  const [friends, setFriends] = useState(["Rick", "Morty", "Birdperson"])

  return (
    <div>

      {/* Incrementing a Count state variable */}
      <h1>{counter}</h1>
      <button onClick={() => setCounter(prevCount => prevCount + 1)}> + </button>

      {/* Using useState for toggle functionality */}
      <p>{ isToggled ? "The toggle is On" : "The toggle is Off"}</p>
      <button onClick={() => setToggle(prevToggle => !prevToggle)}>Toggle it</button>

      {/* Using useState to update an array of strings */}
      { friends.map(friend => <h1>{friend}</h1>) }
      <button onClick={() => setFriends(prevFriends => [...prevFriends, "Frank"])}>Add Frank</button>

    </div> 
  )
}


export default App