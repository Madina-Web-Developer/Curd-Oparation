
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Layoutone from './Components/Layouts/Layoutone'
import Home from './Components/Pages/Home'
import Userspage from './Components/Pages/Userspage'

function App() {
  
const myroute = createBrowserRouter(
  createRoutesFromElements(
      <Route>
      <Route path='/' element={<Layoutone/>}>
      <Route index element={<Home/>}/>
      <Route path='/users' element={<Userspage/>}/>
      </Route>
      </Route>    
  )
)

  return (
    <>
     <RouterProvider router={myroute}/>
    </>
  )
}

export default App
