import React from "react"

const ListButton = props => {
  return (
    <div className="button-container">
      <button onClick={props.getData}>Show me Data</button>
    </div>
  )
}

export default ListButton
