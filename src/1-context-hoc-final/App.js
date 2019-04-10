import React, {Component} from "react"
import List from "./List.js"
import ListButton from "./ListButton.js"
import {DataContext} from './DataProvider.js'
import {withData} from './DataProvider.js'

// Higher Order Components (function)

const App = ({getData, listData}) => {
  return (
    <div className="app-container">
        <ListButton getData={getData} />
        <List listData={listData} /> 
    </div>
  )
}

export default withData(App)


   