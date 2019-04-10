import React, {useState, useEffect} from 'react'
import axios from 'axios'


// This was the extra example using axios to do a componentDidMount http request and save/map the data.
const App = (props) => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character").then(res => {
            setCharacters(res.data.results)
        })
    }, []) // Given an empty array as I only want this to fire on component Mount, not update as well.

    return (
        <div>
            {characters.map(char => 
                <h1>{char.name}</h1>
            )}
        </div>
    )
}

export default App;