import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Coffee from '../Pages/Coffee'
import Subscribe from '../Pages/Subscribe'
import Merch from '../Pages/Merch'
import Findstore from '../Pages/Findstore'
import Blog from '../Pages/Blog'
import About from '../Pages/About'
import Home from '../Pages/Home'
import Descriptionpage from '../Pages/Descriptionpage'
import Login from '../Pages/Login'
import PrivateRoutes from '../Pages/Privateroutes'
function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/coffee' element={<Coffee/>}></Route>
        <Route path='/subscribe' element={<Subscribe/>}> </Route>
        <Route path='/merch' element={<Merch/>}></Route>
        <Route path='/store' element={<Findstore/>}>  </Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/description/:id' element={<PrivateRoutes>
          <Descriptionpage/>
        </PrivateRoutes>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
