import React from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <Header />
      {/* <Dashboard /> */}
      <GlobalStyles />
    </>
  );
};

export default App;
