import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Global/Homepage";
import LogIn from "./components/Auth/LogIn";
import SignUp from "./components/Auth/SignUp";
import Profile from "./components/User/Profile.jsx";
import ProfileTesting from "./components/User/[test] Profile.jsx";
import Email from "./components/Email Form's/Email";
import Product from "./components/Product/Product.jsx";
import Message from "./components/Email Form's/SendMessage.jsx";
import Admin from "./components/Admin Path/AdminPanel.jsx";
import EditUsers from "./components/Admin Path/AdminEditUsers.jsx";
import EditProducts from "./components/Admin Path/AdminEditProducts.tsx";
import Log from "./components/Admin Path/AdminLog.jsx";
import Store from "./components/Product/Store.tsx";
import "./styles/styles.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-test" element={<ProfileTesting />} />
          <Route path="/verification" element={<Email />} />
          <Route path="/product" element={<Product />} />
          <Route path="/message" element={<Message />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/admin-panel" element={<Admin />} />
          <Route path="/edit-users" element={<EditUsers />} />
          <Route path="/edit-products" element={<EditProducts />} />
          <Route path="/admin-log" element={<Log />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;