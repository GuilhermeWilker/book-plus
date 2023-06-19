import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BookDataProvider } from "./context/BookContexts/BookDataContext.jsx";

import Home from "./routes/Home.jsx";
import BookDetails from "./routes/BookDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/book/:id", element: <BookDetails /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BookDataProvider>
      <RouterProvider router={router} />
    </BookDataProvider>
  </React.StrictMode>
);
