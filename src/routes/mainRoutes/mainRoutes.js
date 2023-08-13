import React from "react";

export const guestRoutes = [
  {
    path: "/sign-in",
    name: "SignIn",
    exact: true,
    component: React.lazy(() => import("../../view/auth/signIn/SignIn")),
  },
  {
    redirectRoute: true,
    name: "SignIn",
    path: "/sign-in",
  },
];

export const userRoutes = [
  {
    path: "/main-page",
    name: "MainPage",
    exact: true,
    component: React.lazy(() => import("../../view/mainPage/MainPage")),
  },
  {
    redirectRoute: true,
    name: "MainPage",
    path: "/main-page",
  },
];
