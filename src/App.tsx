import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
const Home = lazy(()=>import("./pages/Home"))
const Login = lazy(()=> import("./pages/Login"));
const Signup = lazy(()=> import("./pages/Signup"));
const Dashboard = lazy(()=>import("./pages/Dashboard"));


function App() {
  return(

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="signup" element={<Signup/>}/>
    <Route path="dashboard" element={<Dashboard/>}/>
    <Route path="*" element={<Navigate to={'/home'} replace/> }/>
  </Routes>
  )

}

export default App;
