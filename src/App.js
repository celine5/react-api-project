import { Route, Routes } from "react-router-dom"
import CompA from "./Component/ComA"
import CompB from "./Component/ComB"



function App(){
    return(
        <>
        <h1>App component</h1>
        <Routes>
            <Route path='/' element={<CompA/>} />
            <Route path='/compB' element={<CompB/>} />
        </Routes>

        </>
        
    )
}
export default App