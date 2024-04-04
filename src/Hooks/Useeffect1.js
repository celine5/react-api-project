import { useState,useEffect } from 'react'
import './Useeffect.css'
function Useeffect1() {

    const[user,setUser]=useState([
        {
            name:"john",
            age:41,
            city:"chennai"
        },
        {
            name:"annie",
            age:21,
            city:"teni"
        },
        {
            name:"veni",
            age:41,
            city:"chennai"
        },
        {
            name:"rani",
            age:41,
            city:"chennai"
        },
    ])
    // useEffect(()=>{
    //     user.map((e)=>{
    //         console.log(e.name)
    //     })
    // })
    
    return(
        <div id='parent'>
        {
              user.map((e)=>{
                return(
                    <div key={e.id} class="container">
                    <h1>{e.name}</h1>
                    <h3>{e.age}</h3>
                    <h5>{e.city}</h5>
                </div>
                )
                
              })
            }
        </div>
    )
}
export default Useeffect1