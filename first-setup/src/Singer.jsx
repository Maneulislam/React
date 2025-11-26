
export default function Singer({ name, age }) {
    return (
        <div style={{
            border: '5px solid green',
            margin: '10px',
            padding: '10px',
            borderRadius: '10px'
        }}>
            <h2>Singer Name: {name}</h2>
            <h3>Singer Age: {age}</h3>
        </div>
    )
}