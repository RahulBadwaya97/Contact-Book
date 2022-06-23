import { Route, Routes } from "react-router-dom";
import Dashboard from "../Containers/Dashboard.tsx/Dashboard";
import { ToastContainer } from "react-toastify";
import Create from "../Containers/Create/Create";
const App =()=>{
    return(
        <>
        <ToastContainer/>
        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/create" element={<Create/>}></Route>
        </Routes>

        </>
    )
}
export default App;