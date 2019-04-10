import React from "react"

const List = props => {
  return (
    <div className="list-container">
      {props.listData.map(item => 
        <h1 key={item.id}>{item.title}</h1>
      )}
    </div>
  )
}

export default List
