import React, {useEffect, useState} from "react"

const App = () => {
    const [color, setColor] = useState("blue")

    useEffect(() => {
        // componentDidMount
        window.addEventListener("keydown", selectColor)

        return () => {
            // componentWillUnmount
            window.removeEventListener("keydown", selectColor)
        }
    })

    const selectColor = (e) => {
        if(e.which === 82){
            setColor("red")
        } else if(e.which === 66){
            setColor("blue")
        } else if(e.which === 71){
            setColor("green")
        } else if(e.which === 89){
            setColor("yellow")
        }
    }

    return (
        <div style={{width: 300, height: 300, backgroundColor: color}}>
         
        </div>
    )
}

export default App