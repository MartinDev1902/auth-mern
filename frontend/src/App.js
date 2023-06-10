import Home from "./pages/Home"
import {Routes, Route} from 'react-router-dom'
import Register from "./pages/Register"
import Login from "./pages/Login"
import RecoveryPassword from "./pages/RecoveryPassword"
import SetNewPassword from "./pages/SetNewPassword"

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/recovery" element={<RecoveryPassword/>}/>
      <Route path="/newpassword/:id" element={<SetNewPassword/>}/>
    </Routes>
  )
}

export default App