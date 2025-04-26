
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Layoutone from './Components/Layouts/Layoutone'
import Home from './Components/Pages/Home'

function App() {
  
const myroute = createBrowserRouter(
  createRoutesFromElements(
      <Route>
      <Route path='/' element={<Layoutone/>}>
      <Route index element={<Home/>}/>
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
