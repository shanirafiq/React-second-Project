import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Contact from "./Contact"
import Error from "./Error"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
let router= createBrowserRouter([
  {path:"/", element:<Home/>},
  {path:"/about", element:<About/>},
  {path:"/services", element:<Services/>},
  {path:"/contact", element:<Contact/>},
  {path:"*" , element:<Error/>}
])


function App() {
  

  return (
    <>
      <RouterProvider router={router} />
     </>
  )
}

export default App
