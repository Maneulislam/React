
import { Suspense } from 'react';
import './App.css'
import Counts from './Counts'
import Toggle from './Toggle'
import Users from './Users';

function App() {

  const handleFetch = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
  }


  return (
    <>

      <h1>Counts</h1>
      <Counts ></Counts>

      <h1>Toggle</h1>
      <Toggle></Toggle>

      <h1>Api Data Fetching</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Users handleFetch={handleFetch()}></Users>
      </Suspense>

    </>
  )
}

export default App
