import React, { Component } from 'react'
import {data} from './data.json'

export const DataContext = React.createContext()

class DataProvider extends Component {
    constructor(){
        super()
        this.state ={
            listData: []
        }
    }

    getData = () => {
        const listData = data
        this.setState({
          listData
        })
    }

    render(){
        return (
            <DataContext.Provider 
                value={{
                    listData: this.state.listData,
                    getData: this.getData
                }}>
                { this.props.children }
            </DataContext.Provider>
        )
    }
}

export default DataProvider


export const withData = C => props => (
    <DataContext.Consumer>
        { value => <C {...props} {...value}/>}
    </DataContext.Consumer>
)