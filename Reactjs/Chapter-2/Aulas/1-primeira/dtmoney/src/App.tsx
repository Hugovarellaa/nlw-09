import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

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
