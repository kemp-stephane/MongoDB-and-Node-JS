import { BrowserRouter, Route, Routes } from "react-router-dom"
import User from "./components/User"
import CreateUser from "./components/CreateUser"
import UpdateUser from "./components/UpdateUser"
import './App.css';

  const App =()=>{ 
  

    return(
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<User/>}></Route>
       <Route path='/cars' element={<CreateUser/>}></Route>
       <Route path='/cars/:id' element={<UpdateUser />}></Route>

     </Routes>
   </BrowserRouter>
    )
  }
export default App;