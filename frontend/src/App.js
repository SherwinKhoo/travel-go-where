import React, { useState, useContext, Suspense } from "react";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./components/landing_page/LandingPage";
import MainThread from "./components/country_threads/MainThread";
import LoginPage from "./components/login/LoginPage";
import IndividualPost from "./components/country_threads/IndividualPost";

import resultsContext from "./components/context/resultsContext";

const App = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState([]);

  return (
    <>
      <LoginPage />
      <resultsContext.Provider value={{ results, setResults }}>
        <main>
          <Routes>
            <Route
              path="/"
              element={<LandingPage setSearchCountry={setSearchCountry} />}
            ></Route>
            <Route
              path={`/${searchCountry}`}
              element={
                <MainThread
                  searchCountry={searchCountry}
                  topic={topic}
                  setTopic={setTopic}
                />
              }
            ></Route>
            <Route
              path={"/Singapore/0/:topic/:index"}
              element={
                <IndividualPost topic={topic} value={{ results, setResults }} />
              }
            ></Route>
          </Routes>
        </main>
      </resultsContext.Provider>
    </>
  );
};

export default App;
