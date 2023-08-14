import React, { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// // static import
import { guestRoutes, userRoutes } from "./routes";
import MainLayout from "./layouts/MainLayout";
import FallBackLoader from "./component/loader/FallBackLoader";

function App() {
  // // initial state
  const tokenPresent = localStorage.getItem("authToken");

  // // redux state
  const { currentTheme } = useSelector((state) => state.common);
  const { isAuth } = useSelector((state) => state.auth);

  // // local state
  const [appRoutes, setAppRoutes] = useState([]);
  useEffect(() => {
    if (tokenPresent || isAuth) {
      setAppRoutes(userRoutes);
    } else {
      setAppRoutes(guestRoutes);
    }
  }, [tokenPresent, isAuth]);

  const mainContent = appRoutes.map((route) => {
    return route.component ? (
      <Route
        key={route.name}
        path={route.path}
        exact={route.exact}
        name={route.name}
        element={<route.component />}
      />
    ) : (
      route.redirectRoute && (
        <Route
          path="*"
          key={route.name}
          element={<Navigate to={route.path} />}
        />
      )
    );
  });

  return (
    <Suspense fallback={<FallBackLoader />}>
      <div data-theme={currentTheme}>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout isAuthenticated={tokenPresent} />}>
              {mainContent}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
