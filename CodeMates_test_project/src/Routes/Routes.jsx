import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Main from "../Layout/Main";
import About from "../components/About";
import Shop from "../components/Shop";
import AllFruits from "../components/AllFruits";
import AddQuizForm from "../components/AddQuizForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/allfruits",
        element: <AllFruits></AllFruits>,
      },
      {
        path: "/quiz",
        element: <AddQuizForm></AddQuizForm>
      }
    ],
  },
]);

export default router;
