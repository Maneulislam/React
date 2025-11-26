import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Food from './Food'
import Actor from './Actor'
import Singer from './Singer'

function App() {

  const Actors = [
    "Shakib Khan",
    "Chanchal Chowdhury",
    "Mosharraf Karim",
    "Afran Nisho",
    "Arifin Shuvoo"
  ];

  const Singers = [
    { id: 1, name: "James (Nagar Baul)", age: 59 },
    { id: 2, name: "Ayub Bachchu", age: 56 }, // (Legendary, passed away)
    { id: 3, name: "Habib Wahid", age: 44 },
    { id: 4, name: "Tahsan Rahman Khan", age: 44 },
    { id: 5, name: "Imran Mahmudul", age: 33 }
  ];


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Singers</h1>

      {
        Singers.map(singer => <Singer key={singer.id} name={singer.name} age={singer.age}></Singer>)
      }

      <h1>Actors</h1>

      {
        Actors.map(actor => <Actor name={actor}></Actor>)
      }


      <h1>Food</h1>

      <Food hungry={true} food='Biriyani'></Food>
      <Food hungry={false} food=''></Food>
      <Food hungry={true} food='Halim'></Food>



      <h1>Device</h1>

      <Device device='laptop' price='50k'></Device>
      <Device device='Phone' price='20k'></Device>
      <Device device='TV' price='15k'></Device>


      <h1>Player</h1>

      <Player name='Shakib' runs='20k'></Player>
      <Player name='Tamim' runs='30k'></Player>
      <Player name='Masrafi' runs='10k'></Player>

    </>
  )
}

function Player({ name, runs }) {
  return (
    <div style={{
      border: '5px solid green',
      margin: '10px',
      padding: '10px',
      borderRadius: '10px'
    }}>
      <h3>Name: {name}</h3>
      <h5>Runs: {runs}</h5>
    </div>
  )
}


function Device(props) {
  return (
    <div style={{
      border: '5px solid green',
      margin: '10px',
      padding: '10px',
      borderRadius: '10px'
    }}>
      <h3>Device: {props.device}</h3>
      <h5>Price: {props.price}</h5>
    </div>
  )
}

export default App
