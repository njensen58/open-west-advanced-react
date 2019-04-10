import React, {useReducer} from "react"
import {data} from "./friends.json"

const initState = {isLoggedIn: false, friends: []}

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        isLoggedIn: true,
        friends: [...action.friends]
      }
    case "logout":
      return {
        isLoggedIn: false,
        friends: []
      }
    default:
      return state
  }
}

const App = () => {
  
  const [state, dispatch] = useReducer(reducer, initState)
  const {isLoggedIn, friends} = state

  return (
    <div>
      {!isLoggedIn && (
        <button onClick={() => dispatch({type: "login", friends: data})}>
          Login
        </button>
      )}
      {isLoggedIn && (
        <button onClick={() => dispatch({type: "logout"})}>Logout</button>
      )}
      <div>
        {isLoggedIn && <h1>Friend List</h1>}
        {friends.map((friend, i) => (
          <h1 key={i}>{friend.name}</h1>
        ))}
      </div>
    </div>
  )
}

export default App