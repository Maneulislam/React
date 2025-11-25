
export default function Food({ hungry, food }) {

    if (hungry === true) {
        return <h2 style={{
            border: '5px solid green',
            margin: '10px',
            padding: '10px',
            borderRadius: '10px'
        }} >
            Food:  {food}

        </h2>
    }
    else {
        return <h2 style={{
            border: '5px solid green',
            margin: '10px',
            padding: '10px',
            borderRadius: '10px'
        }} >Sleep</h2>
    }

}