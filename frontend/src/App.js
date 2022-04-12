import React, { useState, useContext, Suspense } from "react";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./components/landing_page/LandingPage";
import MainThread from "./components/country_threads/MainThread";
// import PopularPlaces from "./components/country_threads/PopularPlaces";
import LoginPage from "./components/login/LoginPage";

import IndividualPost0 from "./components/country_threads/IndividualPost0";
import IndividualPost1 from "./components/country_threads/IndividualPost1";
import IndividualPost2 from "./components/country_threads/IndividualPost2";

import resultsContext0 from "./components/context/resultsContext0";
import resultsContext1 from "./components/context/resultsContext1";
import resultsContext2 from "./components/context/resultsContext2";

const App = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const [topic, setTopic] = useState("");
  const [results0, setResults0] = useState([]);
  const [results1, setResults1] = useState([]);
  const [results2, setResults2] = useState([]);

  return (
    <>
      <LoginPage />
      <resultsContext0.Provider value={{ results0, setResults0 }}>
        <resultsContext1.Provider value={{ results1, setResults1 }}>
          <resultsContext2.Provider value={{ results2, setResults2 }}>
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
                {/* <Route
              path={`/${searchCountry}`}
              element={
                <PopularPlaces
                  searchCountry={searchCountry}
                  topic={topic}
                  setTopic={setTopic}
                />
              }
            ></Route> */}
                <Route
                  path={"/Singapore/0/:topic/:index"}
                  element={
                    <IndividualPost0
                      topic={topic}
                      value={{ results0, setResults0 }}
                    />
                  }
                ></Route>
                <Route
                  path={"/Singapore/1/:topic/:index"}
                  element={
                    <IndividualPost1
                      topic={topic}
                      value={{ results1, setResults1 }}
                    />
                  }
                ></Route>
                <Route
                  path={"/Singapore/2/:topic/:index"}
                  element={
                    <IndividualPost2
                      topic={topic}
                      value={{ results2, setResults2 }}
                    />
                  }
                ></Route>
                <Route
                  path={"/Singapore/0/newPost"}
                  element={
                    <CreatePost
                      title={title}
                      categories={categories}
                      content={content}
                    />
                  }
                />
              </Routes>
            </main>
          </resultsContext2.Provider>
        </resultsContext1.Provider>
      </resultsContext0.Provider>
    </>
  );
};

export default App;
