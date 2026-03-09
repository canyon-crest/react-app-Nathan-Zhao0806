import './Card.css'
import { useState } from 'react'

function Card({name, description}){

    const [count, setCount] = useState(0);

    return (
        <div>
            <h4>{name}</h4>
            <p>Description: {description}</p>
            <button onClick={()=> setCount(count+1)}> {name} to cart</button>
            <button onClick={()=> setCount(0)}>Reset</button>
        <p>{name}:{count}</p>
        </div>
    )
}
export default Card