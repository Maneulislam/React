import { useState } from "react"

export default function Count() {

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newValue = count + 1;
        setCount(newValue);
    }

    return (
        <div style={{ border: '3px solid green' }}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}