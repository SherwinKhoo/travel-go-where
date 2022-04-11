import React, { Suspense } from "react";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./components/landing_page/LandingPage";
import MainThread from "./components/country_threads/MainThread";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Singapore" element={<MainThread />}></Route>
      </Routes>
    </main>
  );
};

export default App;
