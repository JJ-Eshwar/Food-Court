import * as React from 'react';
import { lazy, Suspense } from "react";
import ReactDOM from 'react-dom/client';
import css from './output.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './components/Error.js';
import RestaurantMenu from './components/RestaurantMenu.js';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import Cart from './components/Cart.js';
import GroceryList from './components/GroceryList.js';


// lazy loading 
const Grocery = lazy(() => import("./components/Grocery.js"))
const About = lazy(() => import("./components/About.js"));
const Body = lazy(() => import("./components/Body.js"));
const Contact = lazy(() => import("./components/Contact.js"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className='app'>
      <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
      </div>
    </Provider>

  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<h1>Loading...</h1>}><Body /></Suspense>,
      },
      {
        path: "/About",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
      },
      {
        path: "/Contact",
        element: <Suspense fallback={<h1>Loading...</h1>}><Contact /></Suspense>,
      },
      {
        path: "/Grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/Groceries/:id",
        element:<GroceryList/>
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router={appRouter} />);

