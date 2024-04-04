import {useState} from 'react'
// example of useState

function UseState() {

    // const [name,Setname]=useState("annie")
    // return(
    //     <>
    //     <input type="text" id="name" class="name"  onChange={(e)=>{Setname(e.target.value)}}/>
           
        
    //     <h1>{name}</h1>
    //     </>
    // )

         const [age, Setage] = useState(42);
         const handler=(e)=>{Setage(e.target.value); console.log(age)}
         const Submit=(e)=>{e.preventDefault()
            handler()}

         return (
            <>
            <form>


              <h1>Your age: {age}</h1>
              <input type="text" id="age" class="age" value={age} onChange={handler}/>
              <input type="text" ></input>
              </form>   
         <button onClick={Submit}></button>
              </>
              )

}

export default UseState











// const Usecount = () =>{
//     const[count,Setcount]=useState(0)
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={
//             ()=>{Setcount(count+1)}
//         }>Count</button>
//         </>

//     )
// }
