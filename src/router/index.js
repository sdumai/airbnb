import React from "react";
import { Navigate } from "react-router-dom";
// 懒加载
const Home = React.lazy(() => import("@/views/home"));
const Detail = React.lazy(() => import("@/views/detail"));
const Entire = React.lazy(() => import("@/views/entire"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home"></Navigate>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/detail",
    element: <Detail></Detail>,
  },
  {
    path: "/entire",
    element: <Entire></Entire>,
  },
];
export default routes;
