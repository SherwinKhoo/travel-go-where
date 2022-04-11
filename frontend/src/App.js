import React, { useState, Suspense } from "react";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./components/landing_page/LandingPage";
import MainThread from "./components/country_threads/MainThread";
import LoginPage from "./components/login/LoginPage";
import IndividualPost from "./components/country_threads/IndividualPost";

const App = () => {
  const [searchCountry, setSearchCountry] = useState("");
  // const [topic, setTopic] = useState("");

  return (
    <>
      <LoginPage />
      <main>
        <Routes>
          <Route
            path="/"
            element={<LandingPage setSearchCountry={setSearchCountry} />}
          ></Route>
          <Route
            path={`/${searchCountry}`}
            element={<MainThread searchCountry={searchCountry} />}
          ></Route>
          {/* <Route
            path={`/${searchCountry}/${topic}`}
            element={<IndividualPost topic={topic} />}
          ></Route> */}
        </Routes>
      </main>
    </>
  );
};

export default App;
