import { useState } from "react"

export default function Counts() {

    const [increase, setIncrease] = useState(0);

    const handleIncrease = () => {
        setIncrease(increase + 1);
    }

    const handleDecrease = () => {
        setIncrease(increase - 1)
    }

    const handleReset = () => {
        setIncrease(0);
    }

    return (
        <div className="box">
            <h2>Count: {increase}</h2>

            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}