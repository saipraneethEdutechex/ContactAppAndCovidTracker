import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/contacts" element={<MainContent tab="contacts" />} />
            <Route path="/maps" element={<MainContent tab="maps" />} />
            <Route path="/graphs" element={<MainContent tab="graphs" />} />
            <Route path="*" element={<MainContent tab="default" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
