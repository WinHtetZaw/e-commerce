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
import ProductLayout from "./layouts/ProductLayout";
import CartLayout from "./layouts/CartLayout";
import AccountLayout from "./layouts/AccountLayout";
import AccSettingLayout from "./layouts/AccSettingLayout";
import ForgotPw from "./account/ForgotPw";
import ProductDetailLayout from "./layouts/ProductDetailLayout";
import CategoryLayout from "./layouts/CategoryLayout";
import Protected from "./components/Protected";
import { Suspense, lazy } from "react";

const Signup = lazy(() => import("./account/Signup"));
const Signin = lazy(() => import("./account/Signin"));
const Home = lazy(() => import("./pages/Home"));
const AllProducts = lazy(() => import("./pages/AllProducts"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Favorite = lazy(() => import("./pages/Favorite"));
const FilterCategory = lazy(() => import("./pages/FilterCategory"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProfilePage = lazy(() => import("./account/ProfilePage"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="register" element={<Signup />} />
      <Route path="log-in" element={<Signin />} />
      {/* <Route path="password-recovery" element={<ForgotPw />} /> */}

      <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
        <Route index element={<Home />} />
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
        <Toaster position="top-right" />
      </div>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;
