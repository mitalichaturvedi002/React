import { createRoot } from "react-dom/client";
import "./App.css";
import {BrowserRouter,Routes, Route} from "react-router-dom";


import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import App from "./App";
@@ -15,29 +13,26 @@ import Order from "./Topic-14 React Routing/pages/Order";
import ProductPage from "./Topic-14 React Routing/pages/ProductPage";
import Signup from "./Topic-14 React Routing/pages/Signup";
import Login from "./Topic-14 React Routing/pages/Login";

import { AuthProvider } from "./Topic-14 React Routing/store/AuthContext";

createRoot(document.getElementById("root")).render(
 <BrowserRouter>
  <AuthProvider>
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<App/>} >
                  <Route index element={<Home/>}  />
                  <Route element={<ProtectedRoute/>}>
                    <Route path="profile" element={<Profile/>}  />
                    <Route path="shop" element={<Shop/>}  />
                    <Route path="order" element={<Order/>}  />
                  </Route>
                  <Route path="products/:productId" element={<ProductPage/>} />
            </Route>
            <Route path="/login" element={<Login/>} />
            <Route path="signup" element={<Signup/>} />
            <Route path="*" element={<NotFound/>} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="shop" element={<Shop />} />
            <Route path="order" element={<Order />} />
            <Route path="products/:productId" element={<ProductPage />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);





