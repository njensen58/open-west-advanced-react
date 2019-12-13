import React from "react"
import ReactDOM from "react-dom"

// CONTEXT & HOC examples, 
import App from "./1-context-hoc-final/App.js"
import DataProvider from './1-context-hoc-final/DataProvider.js'

// COMMENTS

// RENDER PROPS EXAMPLE
// import App from "./2-render-props-start/App.js"

// REACT HOOKS EXAMPLES
// import App from './3-hooks-start/use-state-example/App.js'
// import App from './3-hooks-start/use-reducer-example/App.js'
// import App from './3-hooks-final/use-effect-example/App.js'

// HTTP request using hooks
// import App from './3-hooks-final/use-effect-example/App-fetch.js'

ReactDOM.render(
    <DataProvider>
        <App/>
    </DataProvider>, 
document.getElementById("root"))
