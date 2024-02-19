import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import ContactSection from "../pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact-us",
        element: <ContactSection />,
      },
    ],
  },
]);

export default router;
