import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Books from "../Pages/Home/Category/books";
import AddBooks from "../Pages/AddBooks/AddBooks";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import BookDetails from "../Pages/Home/Category/BookDetails";
import ReadStory from "../Pages/Home/Category/ReadStory";
import UpdateBooks from "../Pages/UpdateBooks/UpdateBooks";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://library-management-server-ashen.vercel.app/categories"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-Book",
        element: (
          <PrivateRoute>
            <AddBooks></AddBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-Books/:id",
        element: (
          <PrivateRoute>
            <UpdateBooks></UpdateBooks>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://library-management-server-ashen.vercel.app/books/${params.id}`),
      },
      {
        path: "/all-Books",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
        loader: () => fetch("https://library-management-server-ashen.vercel.app/books"),
      },
      {
        path: "/borrowed-Books",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/:name",
        element: <Books></Books>,
        loader: ({ params }) => fetch(`https://library-management-server-ashen.vercel.app/books/category/${params.name}`),
      },
      {
        path: "/:category/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://library-management-server-ashen.vercel.app/books/${params.id}`),
      },
      {
        path: "/:category/:id/read",
        element: <ReadStory></ReadStory>,
        loader: ({ params }) => fetch(`https://library-management-server-ashen.vercel.app/books/${params.id}`),
      },
    ],
  },
]);

export default router;
