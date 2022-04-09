import React, { Suspense } from "react";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./components/landing_page/LandingPage";

const App = () => {
  return (
    <>
      <LandingPage />
    </>
  );
};

export default App;
