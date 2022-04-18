import React from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { makeServer } from "./services/mirage-js";
import { GlobalStyles } from "./styles/GlobalStyles";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyles />
    </>
  );
};

export default App;
