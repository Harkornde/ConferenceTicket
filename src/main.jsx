import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ticket from "./Ticket/Ticket.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/ticket", element: <Ticket /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
