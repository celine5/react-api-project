import { useState } from "react";

const Count=() => {
    
    const add=() => {
        console.log("working")
    }

    return(
        <>
        <h1>{count}</h1>
        <button onClick={add}>Add</button>
        </>
    )
}
export default Count