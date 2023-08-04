// * css
import "./App.css";

// * alert
import { Toaster } from "react-hot-toast";

// * rrd
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import AllProducts from "./pages/AllProducts";
import ProductLayout from "./layouts/ProductLayout";
import ProductDetail from "./pages/ProductDetail";
import FilterCategory from "./pages/FilterCategory";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import CartLayout from "./layouts/CartLayout";
import SearchPage from "./pages/SearchPage";
import AccountLayout from "./layouts/AccountLayout";
import ProfilePage from "./account/ProfilePage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Favorite from "./pages/Favorite";
import AccSettingLayout from "./layouts/AccSettingLayout";
import Signup from "./account/Signup";
import Signin from "./account/Signin";
import ForgotPw from "./account/ForgotPw";
import ProductDetailLayout from "./layouts/ProductDetailLayout";
import CategoryLayout from "./layouts/CategoryLayout";
import Protected from "./components/Protected";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="register" element={<Signup />} />
      <Route path="log-in" element={<Signin />} />
      <Route path="password-recovery" element={<ForgotPw />} />

      <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
        <Route index element={<Home />} breadcrumb="apple" />

        <Route
          path="account"
          element={
            <Protected>
              <AccountLayout />
            </Protected>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="setting" element={<AccSettingLayout />}>
            <Route index element={<ProfilePage />} />
          </Route>
        </Route>

        <Route path="products" element={<ProductLayout />}>
          <Route index element={<AllProducts />} />
          <Route path="category" element={<CategoryLayout />}>
            <Route path=":name" element={<FilterCategory />} />
          </Route>
          <Route path=":id" element={<ProductDetailLayout />}>
            <Route index element={<ProductDetail />} />
          </Route>
          <Route path="search" element={<SearchPage />} />
        </Route>

        <Route
          path="cart"
          element={
            <Protected>
              <CartLayout />
            </Protected>
          }
        >
          <Route index element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Route>
    </>
  )
);

const App = () => {
  return (
    <>
      <div>
        <Toaster
          position="top-right"
          // toastOptions={{
          //   // Define default options
          //   className: "",
          //   duration: 1000,
          //   // style: {
          //   //   background: "#363636",
          //   //   color: "#fff",
          //   // },

          //   // Default options for specific types
          //   success: {
          //     duration: 1000,
          //     // theme: {
          //     //   primary: "green",
          //     //   secondary: "black",
          //     // },
          //   },
          // }}
        />
      </div>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
