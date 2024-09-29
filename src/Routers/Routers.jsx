import App from '../App'
import Info from '../components/Info'
import Login from '../components/Login'

import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from '../components/ErrorPage';
const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/info",
    element: <Info/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

export default Routers