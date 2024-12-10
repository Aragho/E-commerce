
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import ROUTES from "./route/router"


const routes = createBrowserRouter([...ROUTES])

function App() {

  return (
    
     <RouterProvider router={routes}/>
  
  )
}

export default App
