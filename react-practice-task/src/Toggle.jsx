import { useState } from "react"

export default function Toggle() {

    const [show, setShow] = useState();

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div className="box">
            <h2>{show && "Hello, React Learner!"}</h2>
            <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>
        </div>
    )
}