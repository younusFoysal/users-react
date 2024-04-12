import {useState} from "react";

export default function Counter() {
    
    const [count,setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1 ;
        setCount(newCount)
    }

    const handleRed = () => {
        const newCount = count - 1 ;
        setCount(newCount)
    }


    
    return (
        <div style={{border: '1px solid yellow', borderRadius: '10px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRed}>Del</button>
        </div>
    )

}