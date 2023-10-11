import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import './App.css'

function App () {
  const [issues, setIssues] = useState([]) // Lista de Gifs

  // Las llamadas a API normalmente se hacen en el useEffect
  // Usaremos useEffect con un arreglo de dependencias vacío para que se ejecute solo una vez
  const sendSearch = search => {
    fetch(`https://api.github.com/repos/facebook/react/issues${search}
    `)
      .then(response => response.json())
      .then((results) => {
        console.log(results)
        setIssues(results)
      }).catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    fetch(
    `https://api.github.com/repos/facebook/react/issues
    `)
      .then(response => response.json())
      .then((results) => {
        console.log(results)
        setIssues(results)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <div className='App'>
        <SearchBar handleSearch={sendSearch} />
        <div className='grid-cards'>
          {
            issues.map((issue) => (
              <imagecard
                id={issue.id}
                title={issue.title}
                key={issue.id}
              />
            ))
          }
        </div>

      </div>
    </>
  )
}

export default App
