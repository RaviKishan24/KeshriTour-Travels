import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import { Toaster } from "sonner"
import Home from "./components/Home"
import BookNow from "./pages/BookNow"
import Contact from "./pages/Contact"
import Services from "./pages/Services"


const router=createBrowserRouter([
  {path:"/", element:<Home/>},
  {path:"/bookNow",element:<BookNow/>},
  {path:"/contact",element:<Contact/>},
  {path:"/services",element:<Services/>}

])

function App() {
  return (
    <>
    <Toaster position="top-right" richColors/>
    <RouterProvider router={router}/>
  

    </>
  )
}

export default App
