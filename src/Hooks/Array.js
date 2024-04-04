import {useState} from 'react'
const Array = () =>{
    //display array value using useState

    const [color,Setcolor]=useState(0)
    const arr=["red","blue","green"]

    return (
        <>
       <h1>{arr[color]}</h1>
       <button onClick={
            ()=>{Setcolor(color+1)}
        }>Color</button>
        </>
    )
}
export default Array