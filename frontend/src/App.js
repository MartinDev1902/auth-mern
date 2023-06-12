import Home from "./pages/Home"
import {Routes, Route, Navigate} from 'react-router-dom'
import Register from "./pages/Register"
import Login from "./pages/Login"
import RecoveryPassword from "./pages/RecoveryPassword"
import SetNewPassword from "./pages/SetNewPassword"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { autoLogin } from "./store/reducers/auth"

const App = () => {
  const token = useSelector(state => !!state.auth.token)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(autoLogin())
  }, [])

  return(
    <Routes>
      <Route path="/" element={token ? <Home/> : <Navigate replace to="/login"/>}/>
      <Route path="/register" element={token ? <Navigate replace to="/"/> : <Register/>}/>
      <Route path="/login" element={token ? <Navigate replace to="/"/> : <Login/>}/>
      <Route path="/recovery" element={token ? <Navigate replace to="/"/> : <RecoveryPassword/>}/>
      <Route path="/newpassword/:id" element={token ? <Navigate replace to="/"/> : <SetNewPassword/>}/>
    </Routes>
  )
}

export default App