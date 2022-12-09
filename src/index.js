import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Carts from "./components/Carts";
import Login from "./components/Login";
import Register from "./components/Register";
import Search from "./components/Search";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import { store } from "./redux/ConfigStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="detail" element={<Detail />} />
            <Route path="carts" element={<Carts />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="search" element={<Search />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);
