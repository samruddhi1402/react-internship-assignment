import React from "react";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";
import DepartMentList from "./Components/DepartMentList";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/second/department-list" element={<DepartMentList />} />
      </Routes>
    </>
  );
};

export default App;
