import { useState } from "react"

export default function Player() {

    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);


    const handleSingles = () => {
        setRuns(runs + 1)
    }

    const handleFour = () => {
        setRuns(runs + 4)
    }

    const handleSix = () => {
        setRuns(runs + 6)
        setSixes(sixes + 1)
    }

    return (
        <div style={{ border: '3px solid red', margin: '30px' }}>
            <h3>Batsman</h3>
            <h2>Score: {runs}</h2>
            <h5>Six: {sixes}</h5>

            <button onClick={handleSingles}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}