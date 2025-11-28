
import { Suspense } from 'react';
import './App.css'
import Bottle from './component/Bottle/Bottle';

function App() {

  const bottlePromise = fetch('../public/Bottle/bottle.json').then(res => res.json());

  return (
    <>

      <h1>Buy Water Bottle</h1>

      <Suspense fallback={<h2>Bottle Loading...</h2>}>
        <Bottle bottlePromise={bottlePromise}></Bottle>
      </Suspense>

    </>
  )
}

export default App
