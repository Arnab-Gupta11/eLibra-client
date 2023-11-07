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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        element: <AddBooks></AddBooks>,
      },
      {
        path: "/all-Books",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/borrowed-Books",
        element: <BorrowedBooks></BorrowedBooks>,
      },
      {
        path: "/:name",
        element: <Books></Books>,
        loader: ({ params }) => fetch(`https://library-management-server-ashen.vercel.app/books/category/${params.name}`),
      },
      {
        path: "/:category/:id",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) => fetch(`https://library-management-server-ashen.vercel.app/books/${params.id}`),
      },
    ],
  },
]);

export default router;
