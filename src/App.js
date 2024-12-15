import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Css from "./pages/css";
import Profile from "./pages/Profile";
// LEVEL2
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import Signin from './pages/Singin';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },
  {
    path: "/signin",
    element: <Signin />,
  },


  {
    path: "/signup",
    element: <Signup />,
  },



  {
    path: "/About",
    element: <About />,
  },

  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
]);

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
