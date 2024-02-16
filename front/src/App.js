import Footer from "./components/layout/footer/footer";
import Header from "./components/layout/header/header";
import Product from "./components/product/product";
import Home from "./components/home/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <>
        <Product />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      
      <RouterProvider router={router} />
      <Footer />
      
    </>
  );
}

export default App;
