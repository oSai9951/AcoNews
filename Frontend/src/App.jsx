
import News from './Components/News/News';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Error from "./Components/Error/Error"

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <Error />,
      children: [
      
        {
          path: "/world",
          element: <News />
        },
        {
          path: "/nation",
          element: <News />
        },
        {
          path: "/business",
          element: <News />
        },
        {
          path: "/technology",
          element: <News />
        },
        {
          path: "/entertainment",
          element: <News />
        },
        {
          path: "/sports",
          element: <News />
        },
        {
          path: "/science",
          element: <News />
        },
       
        {
          path:"/health",
          element: <News />
        }
      ],
    },

  ]);


 

  return (
    <div className="App">
   
      
     <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
