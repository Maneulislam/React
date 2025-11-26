
import './App.css'

function App() {

  const handleClick = (num) => {
    alert(num + 5)
  }

  return (
    <>

      <h1>Vite + React</h1>

      <button onClick={() => handleClick(10)}>Click Add 5</button>

    </>
  )
}

export default App
