
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from './components/signup'
import Login from './components/Login'
import Home from "./components/Home"
import StartLearning from "./components/startLearning"

import './app.css' 


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/signup' element={<Signup/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     {/* <Route path='/home' element={<Home/>}></Route> */}
    <Route path='/startlearning' element={<StartLearning/>}> </Route>

    </Routes>
    </BrowserRouter>
<Home/>

    </>
  )
}

export default App
