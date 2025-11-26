
import { Suspense } from 'react'
import './App.css'
import Count from './Count'
import Player from './Player'
import Users from './Users'

function App() {

  const handleClick = (num) => {
    alert(num + 5)
  }

  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
  }

  return (
    <>
      <h1>Users</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Users fetchUsers={fetchUsers()}></Users>
      </Suspense>

      <h1>Vite + React</h1>

      <Player></Player>

      <Count></Count>

      <h1>Vite + React</h1>

      <button onClick={() => handleClick(10)}>Click Add 5</button>

    </>
  )
}

export default App
